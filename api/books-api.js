const axios = require("axios");
const baseUrl = 'https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/'
const { assert } = require("chai");
const faker = require('faker');
const randomTitle = faker.random.words();
const randomBookTitle = {title: randomTitle, author: "Andrew Smyelov"};
const bookId = '7ae127f44a74d7cf436e7142fbb92ed6';

class BooksApi {
    async getAllBooks() {
        const allBooks = await axios.get(`${baseUrl}books`);
        assert.equal(allBooks.status, 200);
        return allBooks;
    }

    async createBook() {
        const newBook = await axios.post(`${baseUrl}books`, randomBookTitle);
        const id = newBook.data.id;
        const getBook = await axios.get(`${baseUrl}${id}`);
        assert.equal(getBook.status, 200);
        return newBook;
    }

        async getOneBook() {
        const getOneBook = await axios.get(`${baseUrl}${bookId}`);
        assert.equal(getOneBook.status, 200);
        return getOneBook;
    }

    async updateBook() {
        const updateBook = await axios.put(`${baseUrl}${bookId}`, randomBookTitle);
        assert.equal(updateBook.status, 200);
        return updateBook;
    }

    async deleteBook() {
        const newBook = await axios.post(`${baseUrl}books`, randomBookTitle);
        const id = newBook.data.id;
        const deleteBook = await axios.get(`${baseUrl}${id}`);
        assert.equal(deleteBook.status, 200);
        return deleteBook;
    }
}
module.exports = new BooksApi();
