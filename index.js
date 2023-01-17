// ./src/index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const ads = [
  {
    name: "Fish0",
    description: "fish to buy",
    quantity: 5,
    isPurchased: false,
  },
];

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send(ads);
});

app.get("/getAllItems", (req, res) => {
  res.send(ads);
});
app.get("/editItem", (req, res) => {
  //do database migration that finds item by distinct field  and then switch it with the payload
  //can add or delete based on flag given
  // if theb distinct field isn't found, say not found
  res.send(ads);
});

app.post("/addItem", (req, res) => {
  const { body } = req;
  //add body to database call
  // send data back;

  res.send(ads);
});
app.get;

// starting the server
app.listen(3001, () => {
  console.log("listening on port 3001");
});
