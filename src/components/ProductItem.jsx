import "../css/product-item.css"

const ProductItem = ({productName, productImage, productPrice}) => {
  return (
    <div className="product-item">
        <img src={productImage} alt={productName} />
        <h3>{productName}</h3>
        <p>₹ {productPrice.toFixed(2)}</p>
    </div>
  )
}

export default ProductItem