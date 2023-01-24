const mongoose = require("mongoose");
const request = require("supertest");
const index = require("../index");
require("dotenv").config();

beforeEach(async () => {
  await mongoose.connect(process.env.DB_URI);
});

afterEach(async () => {
  await mongoose.connection.close();
});
const testObj = {
  name: "Beans and Cornbread",
  isPurchased: true,
  quantity: 4,
  description: "Beans and cornbread had a fight",
};

describe("GET items", () => {
  it("show all of the items", async () => {
    const res = await request(index).get("/item");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("POST /item", () => {
  it("create a new item", async () => {
    const res = await request(index).post("/item").send(testObj);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(expect.objectContaining(testObj));
  });
});
