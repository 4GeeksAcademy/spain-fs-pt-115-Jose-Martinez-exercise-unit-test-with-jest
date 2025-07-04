// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    //  la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

describe('Conversión de Divisas', () => {

     // Prueba de euro a dolar
    test('debería convertir 3.5 euros a dólares', () => {
        expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745); 
    });
    
    // Prueba de dolar a yen 
    test('debería convertir 10 dólares a yenes', () => {
        const expected = (10 / 1.07) * 156.5;
        expect(fromDollarToYen(10)).toBeCloseTo(expected);
    });

    // prueba de yenes a libras
    test('debería convertir 1000 yenes a libras', () => {
        const expected = (1000 / 156.5) * 0.87;
        expect(fromYenToPound(1000)).toBeCloseTo(expected);
    });
    
    
    test('debería convertir 156.5 yenes a 0.87 libras', () => {
        expect(fromYenToPound(156.5)).toBeCloseTo(0.87);
    });
});