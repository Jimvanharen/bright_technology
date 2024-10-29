const express = require("express");
const { default: Redis } = require("ioredis");
const app = express();
const port = 4001;

const redis = new Redis({host: "redis", port: 6379});

redis.subscribe("authChannel");

redis.on("message", (channel, message) => {
  if (channel !== "authChannel") return;

  const { username, password } = JSON.parse(message);

  if (username === "user" && password === "password") {
    console.log("Authenticated");
  } else {
    console.log("Wrong credentials");
  }
});

app.listen(port, () => {
  console.log(`Auth microservice running on port: ${port}`);
});
