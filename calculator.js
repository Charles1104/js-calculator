/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

module.exports = (function () {

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  var memory = 0;
  var total = 0;

  /**
   * Return the value of `total`
   * @return { Number }
   */
  function load(number){
    if(typeof(number) === 'number'){
      total = number;
      return total;
    }
    else{
      throw "Please enter a number";
    }
  }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  function getTotal(){
    return total;
  }

 /**
   * Adds the value passed in from `total`
   * @param  { Number } x
   */

  function add(number){
    if (isNumber(number)){
      total += number;
      }
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

  function substract(number){
    if (isNumber(number)){
      total -= number;
    }
  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

  function multiply(number){
    if (isNumber(number)){
      total *= number;
    }
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

  function divide(number){
    if (isNumber(number)){
      total /= number;
    }
   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

  function recallMemory(){
    return memory;
   }

  /**
   * Stores the value of `total` to `memory`
   */

  function saveMemory(){
    memory = total;
   }

  /**
   * Clear the value stored at `memory`
   */

  function clearMemory(){
    memory = 0;
   }

  /**
   * Validation
   */

  function isNumber(testValue) {
  if (typeof testValue === "number") {
    return true;
  }
  else {
   throw new Error('Wrong data type you dummy');
    }
  }
   return {
    load:load,
    getTotal: getTotal,
    add: add,
    substract: substract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory,
   };

});
