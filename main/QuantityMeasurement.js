const VALUE = 0;

console.log("Welcome to quantity measurement program");

class QuantityMeasure{
    
    constructor(unit,value){
        this.VALUE  = unit * value;
    }

    getBaseUnit(callback){
       return callback(this.VALUE);
    }
}

module.exports = QuantityMeasure;