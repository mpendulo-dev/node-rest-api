const request = require("supertest");
const app = require("../index");

describe("Book API", () => {
  let newBookId;

  //Test for creating a new book
  it("should create a new book", async () => {
    const res = await request(app).post("/books").send({
      title: "New Book",
      genre: "Testing the API",
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("_id");
    newBookId = res.body._id;
  });

  //Getting all books
  it("should get all books", async () => {
    const res = await request(app).get("/api/books");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
