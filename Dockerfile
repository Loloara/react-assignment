FROM node:10

WORKDIR /app

COPY . .

EXPOSE 5000
CMD [ "yarn", "run", "dev" ]
