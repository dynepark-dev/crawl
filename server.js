const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const { getUpdatedList, Update } = require("./naver");

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/length", async (req, res) => {
    const [$, $webtoonList] = await getUpdatedList();
    const length = $webtoonList.length;
    res.send(`Naver Updates Length : ${length}`);
});

app.get("/webtoons", async (req, res) => {
    const webtoons = await Update();
    res.json(webtoons);
});

app.listen(PORT, () => {
    console.log(`port: ${PORT}`);
});
