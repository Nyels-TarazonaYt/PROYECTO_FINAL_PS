import { expect } from 'chai';
import { getProducts } from '../src/product.js';

describe('Product List - Cobertura de Sentencias', () => {
    it('should return all products if no filter is applied', () => {
        const result = getProducts();
        expect(result).to.have.lengthOf(2); // Asumiendo que hay 2 productos
    });
});
