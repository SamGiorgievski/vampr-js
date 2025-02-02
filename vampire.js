class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let count = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      count++;
    }

    return count;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {

    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    }

    return false;
  }

  

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }


    // Returns the vampire object with that name, or null if no vampire exists with that name
    vampireWithName(name) {

      if (this.name === name) {
        return this;
      }

      for (const descendent of this.offspring) {
        let answer = descendent.vampireWithName(name);

        if (answer !== null) {
          return answer;
        }

      }

      return null;
    }
  
    // Returns the total number of vampires that exist
     get totalDescendents() {
  
      let vampireDescendents = 0;

      for (const descendent of this.offspring) {
        vampireDescendents += 1;
        vampireDescendents += descendent.totalDescendents;
      }
  
      return vampireDescendents;
    }
  
    // Returns an array of all the vampires that were converted after 1980
    get allMillennialVampires() {
  
      let array = [];

      if (this.yearConverted > 1980) {
        array.push(this);
      }
  
      for (const descendent of this.offspring) {
        const millenials = descendent.allMillennialVampires;
        array = array.concat(millenials);
      }
  
      return array;

    }

}

module.exports = Vampire;

