import { expect } from 'chai';
import { getProducts } from '../src/product.js';

describe('Product List - Cobertura de Decisión', () => {
    it('should filter products by price when price filter is applied', () => {
        const result = getProducts({ price: 30 });
        expect(result).to.deep.equal([{ id: 1, name: 'Camisa', price: 29.99 }]);
    });

    it('should return all products if price filter is not applied', () => {
        const result = getProducts();
        expect(result).to.have.lengthOf(2);
    });
});
