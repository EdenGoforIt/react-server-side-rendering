// const express = require("expre ss");
import express from "express";

const app = new express();
app.get("/", async (req, res) => {
  res.send("<h1>Hello world </h1>");
});

app.listen(7777);
console.log("server is listening");
