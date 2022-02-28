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

});

// test factory function

const newCreature = pAequorFactory(1, mockUpStrand());

console.log(newCreature);

newCreature.mutate();
console.log(newCreature.DNAarray);
