# Week-11-API-Automation

• INITIALIZE new application: npm init, verify that package.json was installed in the folder

• INSTALL Axios: npm i axios

• INSTALL Chai library: npm i chai

• INSTALL Mocha run environment: npm i mocha

• CREATE a a testing framework inside ‘test’ folder

• USE https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/books to test API response

• CREATE test cases: Get all books, Create a book, Get a single book, Update a book and Delete a book.

BASIC FUNCTION:

const {expect, assert} = require('chai');

describe("test suite", async function () {
it("test case", async function () {
const ... = await ...;
});
});
