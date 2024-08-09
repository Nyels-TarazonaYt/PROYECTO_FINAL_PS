import { expect } from 'chai';
import { getProducts } from '../src/product.js';

describe('Product List - Tabla de Decisión', () => {
    it('should return products based on different combinations of filters', () => {
        const result1 = getProducts({ price: 30, name: 'Camisa' });
        const result2 = getProducts({ price: 50 });
        const result3 = getProducts({ name: 'Pantalón' });
        const result4 = getProducts({});

        expect(result1).to.deep.equal([{ id: 1, name: 'Camisa', price: 29.99 }]);
        expect(result2).to.deep.equal([{ id: 2, name: 'Pantalón', price: 49.99 }]);
        expect(result3).to.deep.equal([{ id: 2, name: 'Pantalón', price: 49.99 }]);
        expect(result4).to.have.lengthOf(2);
    });
});
