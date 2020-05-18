class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(checkOutStatus) {
    this._isCheckedOut = checkOutStatus;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let sumOfRatings = this._ratings.reduce((num1, num2) => num1 + num2, 0);
    return sumOfRatings / this._ratings.length;
  }

  addRating(val) {
    this._ratings.push(val);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get autor() {
    return this._author;
  }

  get pages() {
    return this.pages;
  }
}

class Movie extends Media {
  constructor(director, title, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  get director() {
    return this._director;
  }
  get runtime() {
    return this._runtime;
  }
}

// <<<------ testing ------>>>

// testing Books
const theKybalion = new Book("Three Initiates", "The Kybalion - Hermetic Philosophy", 109);

theKybalion.toggleCheckOutStatus();
console.log(theKybalion.isCheckedOut);

theKybalion.addRating(3);
theKybalion.addRating(5);
theKybalion.addRating(4);
console.log(theKybalion.getAverageRating());

//testing Movies
const interstellar = new Movie("Christopher Nolan", "Interstellar", 179);

interstellar.toggleCheckOutStatus();
console.log(interstellar.isCheckedOut);

interstellar.addRating(5);
interstellar.addRating(5);
interstellar.addRating(5);
console.log(interstellar.getAverageRating());
