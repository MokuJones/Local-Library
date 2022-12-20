function findAccountById(accounts, id) {
  return accounts.find(account => account.id == id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accOne, accTwo) => accOne.name.last > accTwo.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  const { id: accountId } = account;
  return books.reduce((counter, book) => {
    return (
      counter +
      book.borrows
        .filter((borrow) => borrow.id === accountId)
        .reduce((total, borrow) => total + 1, 0)
    );
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  books.map(book => {
    book.borrows.map(borrow => {
      authors.map(author => {
        if (author.id == book.authorId) 
          book["author"] = author;
      });
      if (borrow.returned == false && borrow.id == account.id) {
        result.push(book)
      }
    });
  })
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
