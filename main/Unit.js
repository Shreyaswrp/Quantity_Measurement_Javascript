const Units = {
    FEET: 12,
    INCH: 1
 };

class Unit{
    
    constructor(baseUnit){
        const BASE_UNIT = baseUnit;
    }
    
    getBaseUnit() {
        return BASE_UNIT;
    }
 }

 module.exports = Unit;