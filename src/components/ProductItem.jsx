import React from 'react'

const ProductItem = ({productName, productImage, productPrice}) => {
  return (
    <div>
        <img src={productImage} alt={productName} />
        <h3>{productName}</h3>
        <p>${productPrice.toFixed(2)}</p>
    </div>
  )
}

export default ProductItem