import express from "express";
import { readFileSync } from "fs";

const app = new express();
app.use(express.static("dist"));
app.get("/", async (req, res) => {
  const index = readFileSync("public/index.html", "utf8");
  res.send(index);
});

app.listen(7777);
console.log("server is listening");
