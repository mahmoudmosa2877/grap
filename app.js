const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();

app.use(() => console.log("hi from middelware "));

app.listen(3000, () => {
  console.log("server is running in port 3000");
});
