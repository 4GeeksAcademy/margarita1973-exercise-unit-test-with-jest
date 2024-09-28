
const { fromEuroToDollar,fromDollarToYen, fromYenToPound } = require('./currencyConvert.js');

test("One euro should be 1.07 dollars", function(){ 
          
     expect(fromEuroToDollar(3.5)).toBe(Number(3.745)); 
})

test("One dollar is 146.26 yens", function(){
    expect(fromDollarToYen(6)).toBe(Number(877.570));
})

 test("One yen is 0.00556 pounds", function(){
    expect(fromYenToPound(320)).toBe(Number(1.779));
 })

 test("0 result 0", function(){
    expect(fromDollarToYen(0)).toBe(0);
    expect(fromEuroToDollar(0)).toBe(0);
    expect(fromYenToPound(0)).toBe(0);
 })