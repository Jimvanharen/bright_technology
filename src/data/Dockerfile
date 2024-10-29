FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY ./src/data .

EXPOSE 4002

CMD ["node", "server.js"]
