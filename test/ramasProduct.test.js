import { expect } from 'chai';
import { getProducts } from '../src/product.js';

describe('Product List - Cobertura de Ramas', () => {
    it('should return filtered products based on price and name', () => {
        const result = getProducts({ price: 50, name: 'Pantalón' });
        expect(result).to.deep.equal([{ id: 2, name: 'Pantalón', price: 49.99 }]);
    });

    it('should handle empty filter', () => {
        const result = getProducts({});
        expect(result).to.have.lengthOf(2);
    });
});
