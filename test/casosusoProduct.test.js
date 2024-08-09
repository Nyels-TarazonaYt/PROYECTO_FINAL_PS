import { expect } from 'chai';
import { getProducts } from '../src/product.js';

describe('Product List - Casos de Uso', () => {
    it('should return a product when searching by name', () => {
        const result = getProducts({ name: 'Camisa' });
        expect(result).to.deep.equal([{ id: 1, name: 'Camisa', price: 29.99 }]);
    });

    it('should return products under a certain price', () => {
        const result = getProducts({ price: 50 });
        expect(result).to.deep.equal([{ id: 1, name: 'Camisa', price: 29.99 }, { id: 2, name: 'Pantalón', price: 49.99 }]);
    });
});
