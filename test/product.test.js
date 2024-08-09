import { expect } from 'chai';
import { getProducts } from '../src/product.js';

describe('Product List', () => {
    it('should return a list of products', () => {
        const products = getProducts();
        expect(products).to.be.an('array');
        expect(products).to.have.lengthOf.at.least(1);
    });

    it('should return products filtered by price', () => {
        const products = getProducts({ price: 30 });
        expect(products).to.have.lengthOf(1);
        expect(products[0].name).to.equal('Camisa');
    });

    it('should return products filtered by name', () => {
        const products = getProducts({ name: 'Camisa' });
        expect(products).to.have.lengthOf(1);
        expect(products[0].name).to.equal('Camisa');
    });

    it('should return all products for an empty filter', () => {
        const products = getProducts({});
        expect(products).to.have.lengthOf(2);
    });

    it('should return an empty array for an invalid filter', () => {
        const products = getProducts({ price: -10 });
        expect(products).to.have.lengthOf(0);
    });

    it('should return products with price exactly at the limit', () => {
        const products = getProducts({ price: 29.99 });
        expect(products).to.have.lengthOf(1);
        expect(products[0].name).to.equal('Camisa');
    });

    it('should return products that match both name and price filters', () => {
        const products = getProducts({ name: 'Camisa', price: 30 });
        expect(products).to.have.lengthOf(1);
    });

    it('should return all products within a specific price range', () => {
        const products = getProducts({ price: 50 });
        expect(products).to.have.lengthOf(2);
    });
});
