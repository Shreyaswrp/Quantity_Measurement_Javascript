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
});

describe("CompareLengths", function () {
  it("given0FeetAnd1Feet_WhenCompared_ShouldReturnNotEqual", function() {
    var length1 = new QuantityMeasure(Units.FEET,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.FEET,1).getBaseUnit(function(data){
    return data;
    });
    assert.notEqual(length1,length2);
  });
});

describe("CompareLengths", function () {
  it("given0FeetAndNull_WhenCompared_ShouldReturnNotEqual", function() {
    var length1 = new QuantityMeasure(Units.FEET,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = null;
    assert.notEqual(length1,length2);
  });
});

describe("CompareLengths", function () {
  it("givenSameReference_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.FEET,0).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length1);
  });
});

describe("CompareLengths", function () {
  it("givenSameTypeLengths_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.FEET,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.FEET,0).getBaseUnit(function(data){
    return data;
    });
    assert.equal(typeof(length1),typeof(length2));
  });
});

describe("CompareLengths", function () {
  it("given1FeetAnd12Inch_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.FEET,1).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.INCH,12).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length2);
  });
});

describe("CompareLengths", function () {
  it("given0InchAnd0Inch_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length2);
  });
});

describe("CompareLengths", function () {
  it("given0InchAnd1Inch_WhenCompared_ShouldReturnNotEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.INCH,1).getBaseUnit(function(data){
    return data;
    });
    assert.notEqual(length1,length2);
  });
});

describe("CompareLengths", function () {
  it("given0InchAndNull_WhenCompared_ShouldReturnNotEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = null;
    assert.notEqual(length1,length2);
  });
});

describe("CompareLengths", function () {
  it("givenSameReference_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length1);
  });
});

describe("CompareLengths", function () {
  it("givenSameTypeLengths_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.INCH,0).getBaseUnit(function(data){
    return data;
    });
    assert.equal(typeof(length1),typeof(length2));
  });
});

describe("CompareLengths", function () {
  it("given12InchAnd1Feet_WhenCompared_ShouldReturnEqual", function() {
    var length1 = new QuantityMeasure(Units.INCH,12).getBaseUnit(function(data){
    return data;
    });
    var length2 = new QuantityMeasure(Units.FEET,1).getBaseUnit(function(data){
    return data;
    });
    assert.equal(length1,length2);
  });
});