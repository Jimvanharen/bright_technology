FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY ./src/auth .

EXPOSE 4001

CMD ["node", "server.js"]
