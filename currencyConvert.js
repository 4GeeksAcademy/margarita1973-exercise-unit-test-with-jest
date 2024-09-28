
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07, 
    "GBP": 0.87, 
}

const fromDollarToYen = function (valueinDollar) {
    let valueInYen =(valueinDollar*oneEuroIs.JPY/oneEuroIs.USD);
    return Number(valueInYen.toFixed(3));
}

const fromEuroToDollar = function (valueInEuro) {
    let valueinDollar = (valueInEuro*oneEuroIs.USD);
    return Number(valueinDollar.toFixed(3));}


const fromYenToPound =function (valueInYen)  {
    let  poundValue =(valueInYen*oneEuroIs.GBP/oneEuroIs.JPY);
    return Number(poundValue.toFixed(3));
     }


module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}; 