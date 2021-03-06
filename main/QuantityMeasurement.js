/*************************************************************
 *
 * Execution       : default node cmd> node QuantityMeasurement.js
 * Purpose         : Measure quantities in different units
 *
 * @description    : Compares quantities and add quantities of different units 
 *                   of length,weight,volume and temperature.
 *
 * @file           : QuantityMeasurement.js
 * @overview       : Compare and add quantities
 * @module         : QuantityMeasurement
 * @version        : 1.0
 * @since          : 16/11/2020
 *
 * **********************************************************/

/**
  * @description constant variable is declared and initialised with 0 to store basevalue
  * @const VALUE
  */
const VALUE = 0;

console.log("Welcome to quantity measurement program");

/**
  * @description Class QuantityMeasure
  * @class QuantityMeasure
  */
class QuantityMeasure{
    
    constructor(unit,value){
        this.VALUE  = unit * value;
    }

  /**
    * Get the base value from the provided unit 
    * @returns callback with the basevalue
    */
    getBaseUnit = (callback) => {
      return callback(this.VALUE);
    };

  /**
  * Add the base values of the units provided 
  * @param {*} quantity1,quantity2
  * @returns callback with the added value
  */
    static add = (quantity1,quantity2,callback) => {
          var sum = quantity1 + quantity2;
          return callback(sum);
    };

  /**
  * Change the temperature to fahrenheit when temp in celcius provided 
  * @param {*} temperature
  * @returns callback with the converted temperature
  */
    static temperatureConversion = (temperature,callback) => {
          return callback((temperature * 9 / 5) + 32);
    };
}

module.exports = QuantityMeasure;