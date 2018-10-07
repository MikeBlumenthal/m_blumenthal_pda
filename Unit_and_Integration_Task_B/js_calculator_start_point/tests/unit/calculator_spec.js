var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add two numbers', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    const actual = calculator.runningTotal;
    assert.equal(actual, 5);
  })

  it('it should subtract a number from another', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })

  it('it should multiply one number by another', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.equal(actual, 15);
  })

  it('it should divide one number by another', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })

  //integration tests
  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(7);
    calculator.numberClick(7);
    calculator.numberClick(3);
    calculator.numberClick(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 7734);
  })

  it('it can chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.equal(actual, 10);
  })

  it('it can clear the running total without affecting the calculation', function(){
    calculator.numberClick(9);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.equal(actual, 3)
  })
});
