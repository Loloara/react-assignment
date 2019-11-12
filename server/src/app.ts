import * as path from 'path';
import * as express from 'express';
import * as DB from './models/index';
import * as http from 'http';
import * as cors from 'cors';
import { Sequelize } from 'sequelize/types';
import authRouter from './routes/auth';
import productRouter from './routes/product';
import logger from './logger';
import User from './models/User';
import Product from './models/Product';


const stopServer = async (server: http.Server, sequelize: Sequelize, signal?: string) => {
  logger.info(`Stopping server with signal: ${signal}`);
  await server.close();
  await sequelize.close();
  process.exit();
};

async function runServer() {
  const sequelize = DB.init();
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/api/auth', authRouter);
  app.use('/api/products', productRouter);
  app.get('/uploads/:fileName', (req, res) => {
    const fileName = req.params.fileName
    console.log(fileName)
    res.sendFile(path.join(__dirname, `../uploads/${fileName}`));
  });
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

  const server = app.listen(5000, () => {
    logger.info('Example app listening on port 5000!');
  });

  try {
    await sequelize.authenticate();
    await sequelize.sync({
      force: true
    });
    const user = await User.create({
      email: 'test@test.com',
      password: 'test123'
    });
    Product.create({
      userId: user.id,
      category: 0,
      title: 'TEST Product',
      price: 1000,
      image: '/uploads/sample-product.jpeg'
    })
  } catch (e) {
    stopServer(server, sequelize);
    throw e;
  }
}

runServer()
  .then(() => {
    logger.info('run succesfully');
  })
  .catch((ex: Error) => {
    logger.error('Unable run:', ex);
  });

