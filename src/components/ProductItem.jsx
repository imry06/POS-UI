import "../css/product-item.css"

const ProductItem = ({productName, productImage, productPrice}) => {
  return (
    <div className="product-item">
        <img src={productImage} alt={productName} />
        {/* <hr /> */}
        <p>{productName}</p>
        <hr />
        <p className="product-price">₹ {productPrice.toFixed(2)}</p>
    </div>
  )
}

export default ProductItem