// import dependencies e.g. chai and the calculator module

// var window = window || undefined;

// if (window) {
//   GLOBAL = window;
// } else {
//   var fs = require('fs');
//   var vm = require('vm');
var chai = require('chai');
var calculatorModule = require("../calculator.js");
var expect = chai.expect;
var should = chai.should();
  // var functionsFile = fs.readFileSync(process.cwd() + '/calculator.js');
  // vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL
// }

// define two variables: `expect` and `should`.



// define a `describe` block. what are we testing? what should be name this suite? This is the "container" describe block.

describe("calculatorModule", function() {

  it('should be a function', function () {
    expect(calculatorModule).to.exist;
    expect(calculatorModule).to.be.an('function');
  });

  it  ('should return an object', function (){
    expect(calculatorModule()).to.be.an('object');
  });

});

  /**
   * each method should have it's own `describe` block
   */

describe('Calculator Methods', function () {

  beforeEach(function () {
    newCalc = calculatorModule();
  });

  // define a `describe` block to test the `load` method and all these tests go INSIDE of this describe

  describe('#load', function () {
    it('should be a function available on a new calculator object', function () {
      expect(newCalc.load).to.be.a('function');
      expect(GLOBAL.load).to.be.undefined;
    });
    it('should load a number into the calculator', function () {
      expect(newCalc.load(666)).to.be.a('number');
      expect(newCalc.load(3)).to.equal(3);
      expect(newCalc.load(67)).to.equal(67);
      expect(newCalc.load(903)).to.equal(903);
    });
    it('should throw an error if not a number is entered', function () {
      expect(newCalc.load.bind(null,"az")).to.throw("Please enter a number");
    });
  });

  // define a `describe` block to test the `getTotal` method and all these tests go INSIDE of this describe

  describe('#getTotal', function () {
    it('should be a function available on a new calculator object', function () {
      expect(newCalc.getTotal).to.be.a('function');
      expect(GLOBAL.getTotal).to.be.undefined;
    });
    it('should return the current total', function () {
      /*CHECK INITIAL VALUE*/
      expect(newCalc.getTotal()).to.equal(0);
      newCalc.load(5);
      expect(newCalc.getTotal()).to.equal(5);
      newCalc.load(12812);
      expect(newCalc.getTotal()).to.equal(12812);
      newCalc.load(02571648);
      expect(newCalc.getTotal()).to.equal(02571648);
    });
  });

  // define a `describe` block to test the `add` method and all these tests go INSIDE of this describe

  describe('#add', function () {
    it('should be a function available on a new calculator object', function () {
      expect(newCalc.add).to.be.a('function');
      expect(GLOBAL.getTotal).to.be.undefined;
    });
    it('should add a number to the total', function () {
      newCalc.add(5);
      expect(newCalc.getTotal()).to.equal(5);
      newCalc.add(12812);
      expect(newCalc.getTotal()).to.equal(12817);
      newCalc.load(9);
      newCalc.add(41);
      expect(newCalc.getTotal()).to.equal(50);
    });
  });

  // define a `describe` block to test the `subtract` method and all these tests go INSIDE of this describe

  describe('#substract', function () {
    it('should be a function available on a new calculator object', function () {
      expect(newCalc.substract).to.be.a('function');
      expect(GLOBAL.substract).to.be.undefined;
    });
    it('should substract a number to the total', function () {
      newCalc.substract(5);
      expect(newCalc.getTotal()).to.equal(-5);
      newCalc.substract(12812);
      expect(newCalc.getTotal()).to.equal(-12817);
      newCalc.load(9);
      newCalc.substract(5);
      expect(newCalc.getTotal()).to.equal(4);
    });
  });

  // define a `describe` block to test the `multiply` method and all these tests go INSIDE of this describe

  describe('#multiply', function () {
    it('should be a function available on a new calculator object', function () {
      expect(newCalc.multiply).to.be.a('function');
      expect(GLOBAL.multiply).to.be.undefined;
    });
    it('should multiply a number from the total', function () {
      newCalc.multiply(5);
      expect(newCalc.getTotal()).to.equal(0);
      newCalc.load(2);
      newCalc.multiply(11);
      expect(newCalc.getTotal()).to.equal(22);
      newCalc.load(9);
      newCalc.multiply(5);
      expect(newCalc.getTotal()).to.equal(45);
    });
  });

  // define a `describe` block to test the `divide` method and all these tests go INSIDE of this describe

  describe('#divide', function () {
    it('should be a function available on a new calculator object', function () {
      expect(newCalc.divide).to.be.a('function');
      expect(GLOBAL.divide).to.be.undefined;
    });
    it('should divide the total by a number', function () {
      newCalc.load(10);
      newCalc.divide(5);
      expect(newCalc.getTotal()).to.equal(2);
      newCalc.load(155);
      newCalc.divide(5);
      expect(newCalc.getTotal()).to.equal(31);
      newCalc.add(2);
      newCalc.divide(3);
      expect(newCalc.getTotal()).to.equal(11);
    });
  });

  // define a `describe` block to test the `recallMemory` method and all these tests go INSIDE of this describe

  describe('#recallMemory', function () {
    it('should be a function available on a new calculator object', function () {
      expect(newCalc.recallMemory).to.be.a('function');
      expect(GLOBAL.recallMemory).to.be.undefined;
    });
    it('should return the value of a number stored in memory', function () {
      expect(newCalc.recallMemory()).to.be.a('Number');
      expect(newCalc.recallMemory()).to.equal(0);
      newCalc.load(10);
      newCalc.saveMemory();
      expect(newCalc.recallMemory()).to.equal(10);
    });
  });

  // define a `describe` block to test the `saveMemory` method and all these tests go INSIDE of this describe

  describe('#saveMemory', function () {
    it('should be a function available on a new calculator object', function () {
      expect(newCalc.saveMemory).to.be.a('function');
      expect(GLOBAL.saveMemory).to.be.undefined;
    });
    it('should return the value of a number stored in memory', function () {
      newCalc.load(10);
      newCalc.saveMemory();
      expect(newCalc.recallMemory()).to.be.equal(10);
      newCalc.load(15);
      newCalc.add(85);
      newCalc.divide(5);
      newCalc.saveMemory();
      expect(newCalc.recallMemory()).to.be.equal(20);
    });
  });

  // define a `describe` block to test the `clearMemory` method and all these tests go INSIDE of this describe

  describe('#clearMemory', function () {
    it('should be a function available on a new calculator object', function () {
      expect(newCalc.clearMemory).to.be.a('function');
      expect(GLOBAL.clearMemory).to.be.undefined;
    });
    it('should return the value of a number stored in memory', function () {
      newCalc.load(10);
      newCalc.saveMemory();
      expect(newCalc.recallMemory()).to.be.equal(10);
      newCalc.clearMemory();
      expect(newCalc.recallMemory()).to.be.equal(0);
      newCalc.load(15);
      newCalc.add(85);
      newCalc.divide(5);
      newCalc.saveMemory();
      newCalc.clearMemory();
      expect(newCalc.recallMemory()).to.be.equal(0);
    });
  });
});
  /**
   * FINAL BOSS
   */

  // define a `describe` block to test the `validation` features of your methods and all these tests go INSIDE of this describe

describe('Validations', function () {

  beforeEach(function () {
    newCalc = calculatorModule();
  });

  describe('Private variables', function () {
    it('Private variables must not be accessible on the global scope', function () {
      expect(GLOBAL.total).to.be.undefined;
      expect(GLOBAL.memory).to.be.undefined;
    });

    it('Private variables must not be accessible by a calculator object', function () {
      expect(newCalc.total).to.be.undefined;
      expect(newCalc.memory).to.be.undefined;
    });

  });

  describe('Data Type', function () {
    it('Only good data types can be entered - ADD', function () {
      expect(newCalc.add.bind(null,"toto")).to.throw(Error);
      expect(newCalc.add.bind(null,[])).to.throw(Error);
    });

    it('Only good data types can be entered - SUBSTRACT', function () {
      expect(newCalc.substract.bind(null,"toto")).to.throw(Error);
      expect(newCalc.substract.bind(null,[])).to.throw(Error);
    });

    it('Only good data types can be entered - MULTIPLY', function () {
      expect(newCalc.multiply.bind(null,"toto")).to.throw(Error);
      expect(newCalc.multiply.bind(null,[])).to.throw(Error);
    });

    it('Only good data types can be entered - DIVIDE', function () {
      expect(newCalc.divide.bind(null,"toto")).to.throw(Error);
      expect(newCalc.divide.bind(null,[])).to.throw(Error);
    });


  });


});

