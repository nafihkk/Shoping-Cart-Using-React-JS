import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Your cart is empty</p> : null}
      <ul className="cart-items">
        {cartItems.map((item) => (
     <li key={item.id} className="cart-item">
     <img src={item.image} alt={item.title} />
     <div>
       <h3>{item.title}</h3>
       <p>${item.price}</p>
       <div className="item-controls">
         <div className="quantity-control">
           <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
           <span>{item.quantity}</span>
           <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
         </div>
         <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
       </div>
     </div>
   </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
