const express = require("express");
const { default: Redis } = require("ioredis");
const app = express();
const port = 4000;

const redis = new Redis({host: "redis", port: 6379});

app.use(express.json());

app.post("/authenticate", async (req, res) => {
  const { username, password } = req.body;

  try {
    await redis.publish("authChannel", JSON.stringify({ username, password }));
    res.json({ message: "Published to Redis" }).status(200);
  } catch (e) {
    console.error(e);
    res.status(500);
  }
});

app.post("/post-data", async (req, res) => {
  const data = req.body;

  try {
    await redis.publish("dataChannel", JSON.stringify({ data }));
    res.json({ message: "Published to Redis" }).status(200);
  } catch (e) {
    console.error(e);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
