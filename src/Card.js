import React from 'react'

function Card() {
    const {thumbnail,title,category,brand,price}=product;
  return (
    <div>
      <div className='container'>
            <img src={thumbnail} alt="" />
            <div className='description'>
            <h2>{title}</h2>
            <h3>Category: {category}</h3>
            <h3>Brand: {brand}</h3>
            <h3>RS: {price}</h3>
            </div>
            <div className='cart'>
            <button className='button'>Add to Cart</button>
            </div>

            </div>
    </div>
  )
}

export default Card
