const Mongoose = require("mongoose");
const { Schema } = Mongoose;

const ItemSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
  },

  isPurchased: {
    type: Boolean,
  },
});

module.exports = Mongoose.model("Item", ItemSchema);
