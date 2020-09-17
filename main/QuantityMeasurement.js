const VALUE = 0;

console.log("Welcome to quantity measurement program");

class QuantityMeasure{
    
    constructor(unit,value){
        this.VALUE  = unit * value;
    }

    getBaseUnit(callback){
       return callback(this.VALUE);
    }

    static add(quantity1,quantity2,callback) {
        var sum = quantity1 + quantity2;
        return callback(sum);
    }
}

module.exports = QuantityMeasure;