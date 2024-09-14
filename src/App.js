import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ProductList from './ProductList'; 
import ProductForm from './ProductForm';

const App = () => {

  const [editingProduct,setEditingProduct] = useState(null);
  const [refresh,setRefresh] = useState(false);

  const handleEdit = (product) =>{
    setEditingProduct(product);
  };

  const handleSave = () =>{
    setEditingProduct(null);
    setRefresh(!refresh);
  };

  return (
    <div className='APP'>
      <ProductForm product={editingProduct} onSave={handleSave} />
      <ProductList onEdit={handleEdit} key={refresh}/> 

    </div>
  );
};

export default App;
