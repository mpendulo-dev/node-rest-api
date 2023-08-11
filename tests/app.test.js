const request = require("supertest");
const app = require("../index");

describe("Book API", () => {
  let server;

  beforeAll(() => {
    server = app.listen(5000);
  });

  afterAll(() => {
    server.close(); // Close the server after running tests
  });

  //test endpoint
  it('should respond with "Hello, World!', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello, World!");
  });

  //GET all books
  it("should get all books", async () => {
    const response = await request(app).get("/api/book");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: "The Three Muskateers",
        }),
      ])
    );
  });

  //Create a new book
  it("should create a new book", async () => {
    const newBook = { title: "Test Book", genre: "Fiction" };
    const response = await request(app).post("/api/book").send(newBook);
    expect(response.status).toEqual(201);
    expect(response.body).toMatchObject(newBook);
  });

  //Update a book
  it("should update a book", async () => {
    const newBook = { title: "Test Book", genre: "Fiction" };
    const createResponse = await request(app).post("/api/book").send(newBook);

    const updatedBook = { title: "Updated book" };
    const updateResponse = await request(app)
      .put(`/api/book/${createResponse.body._id}`)
      .send(updatedBook);

    expect(updateResponse.status).toEqual(200);
    expect(updateResponse.body.title).toEqual(updatedBook.title);
  });

  //Delete a book
  it("should delete a book", async () => {
    const newBook = { title: "Test Book" };
    const createResponse = await request(app).post("/api/book").send(newBook);

    const deleteResponse = await request(app).delete(
      `/api/book/${createResponse.body._id}`
    );

    expect(deleteResponse.status).toEqual(204);
  });
});
