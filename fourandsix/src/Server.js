const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { Client } = require("pg");
var PORT = process.env.PORT || 5000;
const rootPath = url => path.join(process.cwd(), url);

const client = new Client({
  host: "localhost",
  user: "barbalatr",
  port: 5432,
  database: "sptcdb"
});

const app = express()
  .use(bodyParser())
  .get("/", (request, response) => {
    response.sendFile(rootPath("./public/index.html"));
  })
  .get("/Browser.js", (request, response) => {
    response.sendFile(rootPath("./tmp/Browser.js"));
  })
  .post("/", (request, response) => {
    client
      .connect()
      .then(() => console.log("Connected Successfully to Database"))
      .then(() =>
        client.query("insert into atendimento values ($1, $2, $3)", [
          1,
          34,
          request.body.delegado
        ])
      )
      .catch(e => console.log(e))
      .finally(() => client.end());
    console.log(request.body);
    response.json({ message: "ok" });
  })
  .listen(PORT, () => {
    console.log("Server is running...");
  });
