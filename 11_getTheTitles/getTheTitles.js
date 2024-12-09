const getTheTitles = function(books) {
  let titles = [];
  for (const book of books) {
    let title = book.title
    titles.push(title)
  }
  return titles
};

// Do not edit below this line
module.exports = getTheTitles;
