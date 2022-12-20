function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let counter = 0;
  const total = getTotalBooksCount(books);
  books.forEach(book => {
   if (book.borrows[0].returned) counter++
   });
  return total - counter;
}
 /*const result = books.filter(book => book.borrows.filter(status => !status.returned).length
 );
 return result.length;
}*/

function getMostCommonGenres(books) {
  const genres = books.map((book) => book.genre);
  const topFive = [];
  genres.map((genre) => {
  const loc = topFive.findIndex((genreName) => genreName.name === genre);
   if (loc >= 0) {
       topFive[loc].count = topFive[loc].count + 1;
   } else {
       topFive.push({ name: genre, count: 1 });
     }
   });
   topFive.sort((alpha, beta) => beta.count - alpha.count);
   if (topFive.length > 5) {
     return topFive.slice(0, 5);
   }
  return topFive;
}
                               

function getMostPopularBooks(books) {
  const popular = books.map(book => ({ name:book.title, count:book.borrows.length }));
  popular.sort((alpha, beta) => beta.count - alpha.count);
  return popular.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
 let result = [];
 authors.forEach((author) => {
  let authorName = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    authorName.count += book.borrows.length;
   }
  });
  result.push(authorName);
 });
  result.sort((alpha, beta) => beta.count - alpha.count);
  return result.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
