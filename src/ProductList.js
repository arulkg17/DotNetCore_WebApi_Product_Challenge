import React, {useEffect,useState} from 'react';
import {getProducts,deleteProduct} from './ProductService';
import './ProductList.css';
import ConfirmDialog from './ConfirmDialog';

const ProductList = ({ onEdit }) =>{
    const [products,setProducts] = useState([]);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    useEffect(()=>{
        getProducts().then(setProducts);
    },[]);

     const handleDelete = (id) => {
        deleteProduct(id).then(() => {
        setProducts(products.filter(product => product.id !== id));
        setShowConfirmDialog(false); // Close the confirmation dialog after deleting
        });
    };

    const showDeleteConfirmation = (product) => {
        setProductToDelete(product);   // Set the product to delete
        setShowConfirmDialog(true);    // Show the confirmation dialog
    };

    const handleConfirmDelete = () => {
        if (productToDelete) {
        handleDelete(productToDelete.id);
        }
    };

    const handleCancelDelete = () => {
        setProductToDelete(null);      // Clear the selected product
        setShowConfirmDialog(false);   // Hide the confirmation dialog
    };


    return (
        <div className='product-list'>
            <h2>Product List</h2>
            <ul>
                {products.map((prod)=>(
                    <li key={prod.id} className='product-item'>
                        {prod.name} - ${prod.price}
                        <button onClick={()=>onEdit(prod)}>Edit</button>
                        <button onClick={()=>showDeleteConfirmation(prod)}>Delete</button>
                    </li>
                ))}
                
            </ul>
            {/* ConfirmDialog component to confirm deletion */}
            <ConfirmDialog
                show={showConfirmDialog}
                title="Delete Product"
                message={`Are you sure you want to delete ${productToDelete?.name}?`}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
        </div>
    );
};
export default ProductList;