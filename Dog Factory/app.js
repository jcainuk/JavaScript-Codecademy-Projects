// Write your code here:
const dogFactory = (name, breed, weight) => {
  if (typeof name !== 'string'
     || typeof breed !== 'string'
     || typeof weight !== 'number'
  ) {
    return 'name and breed should be a string and weight should be a number';
  }

  return {
    _name: name,
    _breed: breed,
    _weight: weight,

    get name() {
      return this._name;
    },
    set name(newName) {
      if (typeof newName === 'string') {
        this._name = newName;
      }
      return 'name should be a string';
    },

    get breed() {
      return this._breed;
    },
    set breed(breed) {
      if (typeof breed === 'string') {
        this._breed = breed;
      }
      return 'breed should be a string';
    },

    get weight() {
      return this._weight;
    },
    set weight(weight) {
      if (typeof weight === 'number') {
        this._weight = weight;
      }
      return 'weight should be a number';
    },

    bark() {
      return 'ruff! ruff!';
    },
    eatTooManyTreats() {
      this._weight++;
    },
  };
};
