import { expect } from 'chai';
import { getProducts } from '../src/product.js';

describe('Product List - Ruta Básica', () => {
    it('should return products that match the name filter', () => {
        const result = getProducts({ name: 'Camisa' });
        expect(result).to.deep.equal([{ id: 1, name: 'Camisa', price: 29.99 }]);
    });

    it('should return products that match the price and name filters', () => {
        const result = getProducts({ price: 50, name: 'Pantalón' });
        expect(result).to.deep.equal([{ id: 2, name: 'Pantalón', price: 49.99 }]);
    });
});
