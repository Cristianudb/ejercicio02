import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemoveItem={onRemoveItem}
          onUpdateQuantity={onUpdateQuantity}
        />
      ))}
      <p>Total a pagar: ${total}</p>
    </div>
  );
};

export default Cart;
