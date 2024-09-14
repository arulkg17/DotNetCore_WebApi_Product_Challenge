const products = [
    {id:1,name:'Product 1',price:100},
    {id:2,name:'Product 2',price:200}
];

let nextId = products.length;

export const getProducts = () =>{
    return Promise.resolve(products);
};

export const addProduct = (product) => {
    const newProduct = {id:nextId,...product};
    products.push(newProduct);
    return Promise.resolve(products);
};

export const updateProduct = (product) => {
    const index = products.findIndex(p=>p.id === product.id);
    if(index >= 0){
        products[index] = product;
        return Promise.resolve(products);
    }
    return Promise.reject(new Error('Product not founbd'));
};

export const deleteProduct = (id) => {
    const index = products.findIndex(p=>p.id === id);
    if(index >= 0){
        const deletedProduct = products.splice(index,1);
        return Promise.resolve(deletedProduct[0]);
    }
    return Promise.reject(new Error('Product not found'));
};

