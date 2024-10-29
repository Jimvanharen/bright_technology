const express = require("express");
const { default: Redis } = require("ioredis");
const app = express();
const port = 4002;

const redis = new Redis();

redis.subscribe("dataChannel");

redis.on("message", (channel, message) => {
  if (channel !== "dataChannel") return;

  const { data } = JSON.parse(message);

  console.log("Data saved ", data);
});

app.listen(port, () => {
  console.log(`Data microservice running on port: ${port}`);
});
