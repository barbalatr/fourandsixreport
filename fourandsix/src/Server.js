const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var PORT = process.env.PORT || 5000;
const rootPath = url => path.join(process.cwd(), url);

const app = express()
  .use(bodyParser())
  .get("/", (request, response) => {
    response.sendFile(rootPath("./public/index.html"));
  })
  .get("/Browser.js", (request, response) => {
    response.sendFile(rootPath("./tmp/Browser.js"));
  })
  .post("/", (request, response) => {
    console.log(request.body);
    response.json({ message: "ok" });
  })
  .listen(PORT, () => {
    console.log("Server is running...");
  });
