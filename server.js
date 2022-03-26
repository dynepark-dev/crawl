const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const { getUpdatedList, Update } = require("./naver");
const cache = require("./routeCache");
const schedule = require("./schedule");

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/length", cache(3000), async (req, res) => {
    const [$, $webtoonList] = await getUpdatedList();
    const length = $webtoonList.length;
    res.send(`Naver Updates Length : ${length}`);
});

app.get("/webtoons", async (req, res) => {
    const data = schedule.cache.get("/webtoons");
    res.json({ data });
});

app.get("/count", async (req, res) => {
    const data = schedule.cache.get("updatedCount");
    console.log(data);
    res.json({ data });
});

app.get("/test", (req, res) => {
    console.log(schedule);
    res.send("test");
});

app.listen(PORT, () => {
    console.log(`port: ${PORT}`);
});
