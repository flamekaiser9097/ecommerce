import React from 'react'
import { useState,useEffect } from 'react';
import './style.css';
function Product() {
    const [products, setproducts] = useState([]);
    useEffect(() => {    
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
          .then((data)=>setproducts(data.products));    
    },[]);
  return (
    <div className='Product'>{
        products.map((product)=>(
            <div className='container'>
            <img src={product.thumbnail} alt="" />
            <div className='description'>
            <h2>{product.title}</h2>
            <h3>Category: {product.category}</h3>
            <h3>Brand: {product.brand}</h3>
            <h3>RS: {product.price}</h3>
            </div>
            <div className='cart'>
            <button className='button'>Add to Cart</button>
            </div>

            </div>
        )) 
    }
         
    </div>
  )
}

export default Product
