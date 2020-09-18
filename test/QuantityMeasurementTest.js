const assert = require("chai").assert;
const QuantityMeasure = require("../main/QuantityMeasurement");
const Units = require("../main/Unit");

describe("CompareLengths", function () {
    it("given0FeetAnd0Feet_WhenCompared_ShouldReturnEqual", function() {
      var length1 = new QuantityMeasure(Units.FEET,0).getBaseUnit(function(data){
      return data;
      });
      var length2 = new QuantityMeasure(Units.FEET,0).getBaseUnit(function(data){
      return data;
      });
      assert.equal(length1,length2);
    });

    it("given0FeetAnd1Feet_WhenCompared_ShouldReturnNotEqual", function() {
      var length1 = new QuantityMeasure(Units.FEET,0).getBaseUnit(function(data){
      return data;
      });
      var length2 = new QuantityMeasure(Units.FEET,1).getBaseUnit(function(data){
      return data;
      });
      assert.notEqual(length1,length2);
    });

    it("given0FeetAndNull_WhenCompared_ShouldReturnNotEqual", function() {
      var length1 = new QuantityMeasure(Units.FEET,0).getBaseUnit(function(data){
      return data;
      });
      var length2 = null;
      assert.notEqual(length1,length2);
    });

    it("givenSameReference_WhenCompared_ShouldReturnEqual", function() {
      var length1 = new QuantityMeasure(Units.FEET,0).getBaseUnit(function(data){
      return data;
      });
      assert.equal(length1,length1);
    });

   it("givenSameTypeLengths_WhenCompared_ShouldReturnEqual", function() {
      var length1 = new QuantityMeasure(Units.FEET,0).getBaseUnit(function(data){
      return data;
      });
      var length2 = new QuantityMeasure(Units.FEET,0).getBaseUnit(function(data){
      return data;
      });
      assert.equal(typeof(length1),typeof(length2));
    });

  it("given1FeetAnd12Inch_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.FEET,1).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.INCH,12).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length2);
  });

  it("given0InchAnd0Inch_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length2);
  });

  it("given0InchAnd1Inch_WhenCompared_ShouldReturnNotEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.INCH,1).getBaseUnit(function(data){
    return data;
    });
    assert.notEqual(length1,length2);
  });

  it("given0InchAndNull_WhenCompared_ShouldReturnNotEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = null;
    assert.notEqual(length1,length2);
  });

  it("givenSameReference_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length1);
  });

  it("givenSameTypeLengths_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    assert.equal(typeof(length1),typeof(length2));
  });

  it("given12InchAnd1Feet_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,12).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.FEET,1).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length2);
  });

  it("given0YardAnd0Yard_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.YARD,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.YARD,0).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length2);
  });

  it("given3FeetAnd1Yard_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.FEET,3).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.YARD,1).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length2);
  });

  it("given1FeetAnd1Yard_WhenCompared_ShouldReturnNotEqual", function() {
    var length1 = new QuantityMeasure(Units.FEET,1).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.YARD,1).getBaseUnit(function(data){
    return data;
    });
    assert.notEqual(length1,length2);
  });

  it("given1InchAnd1Yard_WhenCompared_ShouldReturnNotEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,1).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.YARD,1).getBaseUnit(function(data){
    return data;
    });
    assert.notEqual(length1,length2);
  });

  it("given1YardAnd36Inch_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.YARD,1).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.INCH,36).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length2);
  });

  it("given1YardAnd3Feet_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.YARD,1).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.FEET,3).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length2);
  });

  it("given0cmAnd0cm_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.CM,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.CM,0).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length2);
  });

  it("given0cmAnd1cm_WhenCompared_ShouldReturnNotEqual", function() {
    var length1 = new QuantityMeasure(Units.CM,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.CM,1).getBaseUnit(function(data){
    return data;
    });
    assert.notEqual(length1,length2);
  });

  it("given2InchAnd5cm_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,2).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.CM,5).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length2);
  });

  it("given2InchAnd2Inch_WhenAdded_ShouldReturn4Inch", function() {
    var length1 = new QuantityMeasure(Units.INCH,2).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.INCH,2).getBaseUnit(function(data){
    return data;
    });
    var sum = QuantityMeasure.add(length1,length2,function(data){
    return data;
    });
    assert.equal(sum,4);
  });

  it("given1FeetAnd2Inch_WhenAdded_ShouldReturn14Inch", function() {
    var length1 = new QuantityMeasure(Units.FEET,1).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.INCH,2).getBaseUnit(function(data){
    return data;
    });
    var sum = QuantityMeasure.add(length1,length2,function(data){
    return data;
    });
    assert.equal(sum,14);
  });

  it("given1FeetAnd1Feet_WhenAdded_ShouldReturn24Inch", function() {
    var length1 = new QuantityMeasure(Units.FEET,1).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.FEET,1).getBaseUnit(function(data){
    return data;
    });
    var sum = QuantityMeasure.add(length1,length2,function(data){
    return data;
    });
    assert.equal(sum,24);
  });

  it("given2InchAnd2.5cm_WhenAdded_ShouldReturn3Inch", function() {
    var length1 = new QuantityMeasure(Units.INCH,2).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.CM,2.5).getBaseUnit(function(data){
    return data;
    });
    var sum = QuantityMeasure.add(length1,length2,function(data){
    return data;
    });
    assert.equal(sum,3);
  });
});

describe("CompareVolumes", function () {
  it("given0LitreAnd0Litre_WhenCompared_ShouldReturnEqual", function() {
    var volume1 = new QuantityMeasure(Units.LITRE,0).getBaseUnit(function(data){
    return data;
    });
    var volume2 = new QuantityMeasure(Units.LITRE,0).getBaseUnit(function(data){
    return data;
    });
    assert.equal(volume1,volume2);
  });

  it("given0LitredAnd1Litre_WhenCompared_ShouldReturnNotEqual", function() {
    var volume1 = new QuantityMeasure(Units.LITRE,0).getBaseUnit(function(data){
    return data;
    });
    var volume2 = new QuantityMeasure(Units.LITRE,1).getBaseUnit(function(data){
    return data;
    });
    assert.notEqual(volume1,volume2);
  });

  it("given1LitredAnd1000MiliLitre_WhenCompared_ShouldReturnEqual", function() {
    var volume1 = new QuantityMeasure(Units.LITRE,1).getBaseUnit(function(data){
    return data;
    });
    var volume2 = new QuantityMeasure(Units.ML,1000).getBaseUnit(function(data){
    return data;
    });
    assert.equal(volume1,volume2);
  });

  it("given1GallonAnd3.78Litre_WhenCompared_ShouldReturnEqual", function() {
    var volume1 = new QuantityMeasure(Units.GALLON,1).getBaseUnit(function(data){
    return data;
    });
    var volume2 = new QuantityMeasure(Units.LITRE,3.78).getBaseUnit(function(data){
    return data;
    });
    assert.equal(volume1,volume2);
  });

  it("given1GallonAnd3.78Litres_WhenAdded_ShouldReturn7.56Litres", function() {
    var volume1 = new QuantityMeasure(Units.GALLON,1).getBaseUnit(function(data){
    return data;
    });
    var volume2 = new QuantityMeasure(Units.LITRE,3.78).getBaseUnit(function(data){
    return data;
    });
    var sum = QuantityMeasure.add(volume1,volume2,function(data){
    return data;
    });
    assert.equal(sum,7.56);
  });

  it("given1LitreAnd1000MiliLitres_WhenAdded_ShouldReturn2Litres", function() {
    var volume1 = new QuantityMeasure(Units.LITRE,1).getBaseUnit(function(data){
    return data;
    });
    var volume2 = new QuantityMeasure(Units.ML,1000).getBaseUnit(function(data){
    return data;
    });
    var sum = QuantityMeasure.add(volume1,volume2,function(data){
    return data;
    });
    assert.equal(sum,2);
  });
});

describe("CompareWeights", function () {
  it("given0KgAnd0Kg_WhenCompared_ShouldReturnEqual", function() {
    var weight1 = new QuantityMeasure(Units.KG,0).getBaseUnit(function(data){
    return data;
    });
    var weight2 = new QuantityMeasure(Units.KG,0).getBaseUnit(function(data){
    return data;
    });
    assert.equal(weight1,weight2);
  });

  it("given0KgAnd1Kg_WhenCompared_ShouldReturnNotEqual", function() {
    var weight1 = new QuantityMeasure(Units.KG,0).getBaseUnit(function(data){
    return data;
    });
    var weight2 = new QuantityMeasure(Units.KG,1).getBaseUnit(function(data){
    return data;
    });
    assert.notEqual(weight1,weight2);
  });

  it("given1KgAnd1000g_WhenCompared_ShouldReturnEqual", function() {
    var weight1 = new QuantityMeasure(Units.KG,1).getBaseUnit(function(data){
    return data;
    });
    var weight2 = new QuantityMeasure(Units.GRAM,1000).getBaseUnit(function(data){
    return data;
    });
    assert.equal(weight1,weight2);
  });

  it("given1TonneAnd1000Kg_WhenCompared_ShouldReturnEqual", function() {
    var weight1 = new QuantityMeasure(Units.TONNE,1).getBaseUnit(function(data){
    return data;
    });
    var weight2 = new QuantityMeasure(Units.KG,1000).getBaseUnit(function(data){
    return data;
    });
    assert.equal(weight1,weight2);
  });

  it("given1TonneAnd1000Gram_WhenAdded_ShouldReturn1001Kg", function() {
    var weight1 = new QuantityMeasure(Units.TONNE,1).getBaseUnit(function(data){
    return data;
    });
    var weight2 = new QuantityMeasure(Units.GRAM,1000).getBaseUnit(function(data){
    return data;
    });
    var sum = QuantityMeasure.add(weight1,weight2,function(data){
    return data;
    });
    assert.equal(sum,1001);
  });
});

describe("CompareTemperature", function () {
  it("given212FahrenheitAnd100Celcius_WhenCompared_ShouldReturnEqual", function() {
    var convertedTemp = QuantityMeasure.temperatureConversion(100,function(data){
    return data;
    });
    var temp1 = new QuantityMeasure(Units.FAHRENHEIT,212).getBaseUnit(function(data){
    return data;
    });
    var temp2 = new QuantityMeasure(Units.CELCIUS,convertedTemp).getBaseUnit(function(data){
    return data;
    });
    assert.equal(temp1,temp2);
  });
});