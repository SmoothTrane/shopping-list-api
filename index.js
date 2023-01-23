// ./src/index.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const itemController = require("./controllers/itemController");

const uri = process.env.DB_URI;
const app = express();

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send([]);
});

app.get("/item", (req, res) => {
  try {
    itemController
      .getAllItems()
      .then((items) => {
        res.send(items);
      })
      .catch((error) => {
        res.send({ Error: error.message });
      });
  } catch (error) {
    res.send({ Error: error.message });
  }
});
app.put("/item", (req, res) => {
  const { body } = req;
  const { id } = body;
  try {
    const item = itemController
      .updateItem(id, body)
      .then((item) => {
        res.send(item);
      })
      .catch((error) => {
        res.send({ Error: error.message });
      });
  } catch (error) {
    res.send({ Error: error.message });
  }
});

app.delete("/item/:itemId", (req, res) => {
  const { params } = req;
  const { itemId } = params;
  try {
    itemController
      .removeItem(itemId)
      .then((item) => {
        res.send(item);
      })
      .catch((error) => {
        res.send({ Error: error.message });
      });
  } catch (error) {
    res.send({ Error: error.message });
  }
});
app.get("/item/:itemId", (req, res) => {
  const { params } = req;
  const { itemId } = params;

  try {
    itemController
      .getItemById(itemId)
      .then((item) => {
        res.send(item);
      })
      .catch((error) => {
        res.send({ Error: error.message });
      });
  } catch (error) {
    res.send({ Error: error.message });
  }
});

app.post("/item", (req, res) => {
  const { body } = req;

  try {
    itemController
      .addItem(body)
      .then((item) => {
        res.send(item);
      })
      .catch((error) => {
        res.send({ Error: error.message });
      });
  } catch (error) {
    res.send({ Error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});
