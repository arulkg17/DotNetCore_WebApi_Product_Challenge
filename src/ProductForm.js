import React,{useState, useEffect} from 'react';
import {addProduct, updateProduct} from './ProductService'; 
import './ProductForm.css'

const ProductForm = ({product, onSave})=>{
    const [name,setName] = useState(product ? product.name : '');
    const [price,setPrice] = useState(product ? product.price : '');
    const [errors,setErrors] = useState({});

    const validateForm = () =>{
        const newErrors = {};

        if(!name.trim()){
            newErrors.name = "Name can not be empty";
        }
        else if(name.length > 50){
            newErrors.name = "Name length can not be more than 50 characters";
        }

        if(!price.trim()){
            newErrors.price = "Price mshould not be blank";
        }
        else if(isNaN(price)){
            newErrors.price = "Price should be number";
        }
        else if(parseFloat(price) <= 0){
            newErrors.price = "Price must be greater than 0";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!validateForm())
        {
            return;
        }
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
                    {errors.name && <p className="error-message">{errors.name}</p>}
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
                    {errors.price && <p className="error-message">{errors.price}</p>}
                </div>
                <button type="submit">{product ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};
export default ProductForm;