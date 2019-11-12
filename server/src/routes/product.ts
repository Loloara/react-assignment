import * as express from 'express';
import Product from '../models/Product';
import * as multer from 'multer';

const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.get('', async (req, res) => {
  const products = await Product.findAll();

  res.json({ data: products });
});

router.get('/:id', upload.single('image'), async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findByPk(Number(id));
    return res.json({ data: product });
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
});

router.post('', upload.single('image'), async (req, res) => {
  const image = req.file;
  const product = req.body;

  try {
    const insertedProduct = await Product.create({
      ...product,
      image: `/${image.path}`,
    });
    return res.json({ data: insertedProduct, msg: '상품등록에 성고하였습니다.' });
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
});

export default router;
