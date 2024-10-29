FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY ./src/api .

EXPOSE 4000

CMD ["node", "server.js"]
