import { P } from "@angular/core/src/render3";

var books = [
  { name: "Book 1", read: true },
  { name: "Book 2", read: false },
  { name: "Book 3", read: true },
];

export function FilterBook() {
  //let booksToRead = books.filter(b => {return !b.read});
  books.forEach(b => {
    if (b.read) {
      console.log(b.name);
    }
  });
}
