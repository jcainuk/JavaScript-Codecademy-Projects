const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  /// // appetizers
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizer) {
    if (typeof appetizer === 'string') {
      this._courses.appetizers.push(appetizer);
    } else {
      return 'Please enter a valid string';
    }
  },

  /// mains

  get mains() {
    return this._courses.mains;
  },
  set mains(main) {
    if (typeof main === 'string') {
      this._courses.mains.push(main);
    } else {
      return 'Please enter a valid string';
    }
  },

  // desserts

  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessert) {
    if (typeof dessert === 'string') {
      this._courses.desserts.push(dessert);
    } else {
      return 'Please enter a valid string';
    }
  },

  // get courses
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  // add dish to course

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    courseName.toLowerCase();

    if (courseName === 'appetizers') {
      this._courses.appetizers.push(dish);
    } else if (courseName === 'mains') {
      this._courses.mains.push(dish);
    } else if (courseName === 'desserts') {
      this._courses.desserts.push(dish);
    } else {
      return 'Please enter valid details';
    }
  },
  // get a random dish from menu course
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);

    return dishes[randomIndex];
  },
  // generate a random meal
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');

    return `You have ordered the following:
${appetizer.name}: ${appetizer.price},
${main.name}: ${main.price},
${dessert.name}: ${dessert.price}
Total Cost : ${appetizer.price + main.price + dessert.price}`;
  },
};

// add appetizers
menu.addDishToCourse('appetizers', 'garlic bread', 3);
menu.addDishToCourse('appetizers', 'mushroom soup', 2);
menu.addDishToCourse('appetizers', 'calamari', 3.5);

// add mains
menu.addDishToCourse('mains', 'lasagne', 4);
menu.addDishToCourse('mains', 'roast chicken', 10);
menu.addDishToCourse('mains', 'pizza', 11);

// add desserts
menu.addDishToCourse('desserts', 'ice cream', 6);
menu.addDishToCourse('desserts', 'cake', 5);
menu.addDishToCourse('desserts', 'biscuits', 2);

// generate a meal
const meal = menu.generateRandomMeal();
console.log(meal);
