const booksApi = require("../api/books-api");

describe("Bookstore Api testing", async () => {
  it("Get all books", async () => {
    await booksApi.getAllBooks();
  });

  it("Create a book", async () => {
    await booksApi.createBook();
  });

  it("Get a single book", async () => {
    await booksApi.getOneBook();
  });

  it("Update a book", async () => {
    await booksApi.updateBook();
  });

  it("Delete a book", async () => {
    await booksApi.deleteBook();
  });
});
