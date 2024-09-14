import React,{useState, useEffect} from 'react';
import {addProduct, updateProduct} from './ProductService'; 
import './ProductForm.css'

const ProductForm = ({product, onSave})=>{
    const [name,setName] = useState(product ? product.name : '');
    const [price,setPrice] = useState(product ? product.price : '');

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newProduct = {id:product ? product.id : null,name,price:parseFloat(price)};
        const saveProduct = product ? updateProduct(newProduct)
                                : addProduct(newProduct);
        saveProduct.then(()=>{
            onSave();
            setName('');
            setPrice('');
        
        });
    }
    useEffect(()=>{
            if(product){
            setName(product.name);
            setPrice(product.price);
            }
        },[product]);
    
    return(
        <div>
            <form onSubmit={handleSubmit} className='product-form'>
                <h2>{product ? "Edit Product" : "Add Product" }</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
                </div>
                <button type="submit">{product ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};
export default ProductForm;