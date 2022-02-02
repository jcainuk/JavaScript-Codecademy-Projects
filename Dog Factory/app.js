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
      if (typeof newName !== 'string') {
        return 'name should be a string';
      }
      this._name = newName;
    },

    get breed() {
      return this._breed;
    },
    set breed(breed) {
      if (typeof breed !== 'string') {
        return 'breed should be a string';
      }
      this._breed = breed;
    },

    get weight() {
      return this._weight;
    },
    set weight(weight) {
      if (typeof weight !== 'number') {
        return 'weight should be a number';
      }
      this._weight = weight;
    },

    bark() {
      return 'ruff! ruff!';
    },
    eatTooManyTreats() {
      this._weight++;
    },
  };
};
