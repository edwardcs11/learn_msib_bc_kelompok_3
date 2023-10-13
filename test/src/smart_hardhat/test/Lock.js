const { expect } = require("chai");
const hre = require("hardhat");

describe("", function () {
  it("Should add a book", async function () {
    const Library = await ethers.getContractFactory("");
    const library = await Library.deploy();
    await library.deployed();

    await library.addBook(123, "Sample Book", 2022, "Author Name");
    const book = await library.books(123);

    expect(book.title).to.equal("Sample Book");
    expect(book.year).to.equal(2022);
    expect(book.author).to.equal("Author Name");
  });
});