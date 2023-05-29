class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(state) {
    this._state = state < 0 ? 0 : state > 100 ? 100 : state;
  }

  get state() { return this._state }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book instanceof PrintEditionItem && book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const wantedBook = this.books.find(book => book[type] === value);
    return wantedBook ? wantedBook : null;
  }

  giveBookByName(bookName) {
    const indexWantedBook = this.books.findIndex(book => book.name === bookName);
    return indexWantedBook < 0 ? null : this.books.splice(indexWantedBook, 1)[0];
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if (mark < 2 || mark > 5) {
      return;
    }
    if (!this.marks.hasOwnProperty(subjectName)) {
      this.marks[subjectName] = [];
    }
    this.marks[subjectName].push(mark);
  }

  getAverageBySubject(subjectName) {
    if (!this.marks.hasOwnProperty(subjectName)) {
      return 0;
    }
    return this.marks[subjectName].reduce((acc, mark, idx, arr) => {
      acc += mark;
      if (idx === arr.length - 1) {
        return acc / arr.length;
      }
      return acc;
    }, 0)
  }

  getAverage() {
    if (!Object.keys(this.marks).length) {
      return 0;
    }
    let sum = 0;
    for (const subject in this.marks) {
      sum += this.getAverageBySubject(subject);
    }
    return sum / Object.keys(this.marks).length;
  }
}