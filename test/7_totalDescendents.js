const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("closestCommonAncestor", function() {

    let offspring1, offspring2, offspring3, offspring4, offspring5, offspring6, offspring7, offspring8;
    beforeEach(() => {
      offspring1 = new Vampire("a");
      offspring2 = new Vampire("b"); 1
      offspring3 = new Vampire("c"); 2
      offspring4 = new Vampire("d");
      offspring5 = new Vampire("e"); 1
      offspring6 = new Vampire("f"); 1
      offspring7 = new Vampire("g");
      offspring8 = new Vampire("h");

      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
      offspring3.addOffspring(offspring5);
      offspring5.addOffspring(offspring6);
      offspring6.addOffspring(offspring7);
      offspring2.addOffspring(offspring8);
    });

    it("root vampire descendents should be 8", () => {
      expect(rootVampire.totalDescendents()).to.equal(8);
    })

    it("offpsring3 descendents should be 4", () => {
      expect(offspring3.totalDescendents()).to.equal(4);
    })

  });
});
