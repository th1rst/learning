const menu = {
  _courses: {
    appetizers: ["Salad", "Soup", "Garlic Bread", "Onion Rings"],
    mains: ["Schnitzel", "Chicken Wings", "Burrito", "Chili"],
    desserts: ["Ice Cream", "Bread Pudding", "Various Little Treats"],
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appEntry) {
    if (typeof this.appetizers === "string") {
      this.menu.appetizers = appEntry;
    } else {
      return "Something went wrong.";
    }
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainsEntry) {
    if (typeof this.mains === "string") {
      this.menu.mains = mainsEntry;
    } else {
      return "Something went wrong.";
    }
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertEntry) {
    if (typeof this.desserts === "string") {
      this.menu.desserts = dessertEntry;
    } else {
      return "Something went wrong.";
    }
  },
  get courses() {
    return {
      appetizers: `Our appetizers for tonight are ${this.appetizers}.`,
      mains: `Our mains for tonight are ${this.mains}.`,
      desserts: `Our desserts for tonight are ${this.desserts}.`,
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(" " + dish.name);
  },

  getRandomDishFromCourse(courseName) {
    return this._courses[courseName][
      Math.floor(Math.random() * this._courses[courseName].length)
    ];
  },

  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse("appetizers");
    let main = this.getRandomDishFromCourse("mains");
    let dessert = this.getRandomDishFromCourse("desserts");
    return `Your randomly generated menu for today is: ${appetizer} as an appetizer. ${main} as your main course and ${dessert} as your dessert.`;
  },
};

