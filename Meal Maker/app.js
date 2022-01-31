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

};
