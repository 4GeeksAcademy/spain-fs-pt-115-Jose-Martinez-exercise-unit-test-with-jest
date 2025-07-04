//Referencia euro para llegar a los valores.
let oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07,  // Dólar estadounidense
    "GBP": 0.87,  // Libra esterlina
};

//oneEuroIs 
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
};
// Dollar -- Yen
const fromDollarToYen = function(valueInDollar) {
    // valor de dólares a euros
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    // valor de euros a yenes
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    // valor en yenes
    return valueInYen;
};
 //Yen--Pound
const fromYenToPound = function(valueInYen) {
    //  valor de yenes a euros
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    // valor de euros a libras
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    // valor en libras
    return valueInPound;
};
 // Del interactivo de learnpack.
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };




