const Item = require("../models/item");

function getAllItems() {
  const query = Item.find({});
  const result = query.exec();
  return result;
}

function getItemById(id) {
  const query = Item.findById(id);
  const result = query.exec();
  return result;
}

function updateItem(id, item) {
  const query = Item.findByIdAndUpdate(id, item);
  return query.exec();
}

async function addItem(item) {
  const newItem = await Item.create(item);
  return newItem;
}

function removeItem(id) {
  const query = Item.findByIdAndRemove(id);
  const result = query.exec();
  return result;
}
module.exports = { getAllItems, updateItem, getItemById, addItem, removeItem };
