// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// factory function
const pAequorFactory = (specimenNum, DNAarray) => ({
  specimenNum,
  DNAarray,
  // mutate method
  mutate() {
  // generate random base
    const base = returnRandBase();

    // select random index from DNAarray
    const randomIndex = Math.floor(Math.random() * DNAarray.length);

    // change base at index
    if (DNAarray[randomIndex] !== base) {
      DNAarray[randomIndex] = base;
    } else {
      this.mutate();
    }
  },
  // compareDNA method
  compareDNA(pAequor) {
    let count = 0;

    for (let i = 0; i < this.DNAarray.length; i++) {
      if (this.DNAarray[i] === pAequor.DNAarray[i]) {
        count += 1;
      }
    }
    const percentageDNA = (count * 100) / this.DNAarray.length;
    console.log(`Specimen #${this.specimenNum} has ${percentageDNA.toFixed(2)}% DNA bases in common with #${pAequor.specimenNum}.`);
  },

});

// test factory function

const newCreature1 = pAequorFactory(1, mockUpStrand());
const newCreature2 = pAequorFactory(2, mockUpStrand());

console.log(newCreature1);
console.log(newCreature2);

// newCreature.mutate();
// console.log(newCreature.DNAarray)
newCreature1.compareDNA(newCreature2);
