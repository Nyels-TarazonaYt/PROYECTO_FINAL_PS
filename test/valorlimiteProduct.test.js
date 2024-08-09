import { expect } from 'chai';
import { getProducts } from '../src/product.js';

describe('Product List - Pruebas de Valor Límite', () => {
    it('should handle maximum price value correctly', () => {
        const result = getProducts({ price: 100 });
        expect(result).to.have.lengthOf(2); // Asumiendo que todos los productos están por debajo de 100
    });

    it('should handle minimum price value correctly', () => {
        const result = getProducts({ price: 0 });
        expect(result).to.have.lengthOf(0); // Asumiendo que no hay productos con precio 0
    });
});
