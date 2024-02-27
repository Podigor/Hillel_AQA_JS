import Book from './Book';

export default class EBook extends Book {
  constructor(title, fileFormat) {
    super(title);
    this.fileFormat = fileFormat;
  }

  static fromBookAndFileFormat(book, fileFormat) {
    return new EBook(book.title, fileFormat);
  }
}
