
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07, 
    "GBP": 0.87, 
}

const fromDollarToYen = (a) => {
    let yenValue =(a*oneEuroIs.JPY/oneEuroIs.USD);
    return yenValue.toFixed(2);
}

const fromEuroToDollar = (a) => {
    let dollarValue = (a*oneEuroIs.USD);
    return dollarValue.toFixed(2);
}
const fromYenTopPound = (a) => {
   let  poundValue =(a*oneEuroIs.GBP/oneEuroIs.JPY);
   return poundValue.toFixed(2);
}



module.exports = fromDollarToYen, fromEuroToDollar, fromYenTopPound; 