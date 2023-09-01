import React from 'react';

const CartItem = ({ item, onRemoveItem, onUpdateQuantity }) => {
  return (
    <div className="cart-item">
      <p>{item.name}</p>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) => onUpdateQuantity(item, e.target.value)}
      />
      <p>${item.price * item.quantity}</p>
      <button onClick={() => onRemoveItem(item)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
