import "../css/cart-item.css";

const CartItem = ({
  productName,
  productImage,
  productPrice,
  productQuantity,
  totalPrice,
}) => {
  return (
    <div className="cart-item">
      <img src={productImage} alt={productName} />
      <div>
        <p>{productName}</p>
        <p>₹ {productPrice.toFixed(2)}</p>
      </div>

      <div className="cart-qty-controls">
        <button>-</button>
        <p>{productQuantity}</p>
        <button>+</button>
      </div>

      <p>Total: ₹ {totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
