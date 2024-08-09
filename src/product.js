export function getProducts(filter) {
    const products = [
        { id: 1, name: 'Camisa', price: 29.99 },
        { id: 2, name: 'Pantalón', price: 49.99 }
    ];

    if (filter && filter.price) {
        return products.filter(product => product.price <= filter.price);
    }
    if (filter && filter.name) {
        return products.filter(product => product.name.includes(filter.name));
    }
    return products;
}
