import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';

const categories = [
  { name: 'Bebida fría', price: 4 },
  { name: 'Bebida caliente', price: 3 },
  { name: 'Postres de café', price: 5 },
  { name: 'Te', price: 2.5 },
  { name: 'Sandwiches', price: 5 },
];

const products = [
  { id: 1, name: '4 botellas de agua fria', description: 'Botella de agua fria de un litro', price: 4, category: 'Bebida fría', image: require('./images/agua1.jpg') },
  { id: 2, name: '3 cafés negros', description: 'tres tazas de café negro', price: 3, category: 'Bebida caliente', image: require('./images/cafenegro2.jpg') },
  { id: 3, name: 'Tiramusú', description: 'un plato con una porción de tiramusú', price: 5, category: 'Postres de café', image: require('./images/tiramisu1.jpg') },
  { id: 4, name: 'Botella de té de 1.5lt', description: 'Una botella de té lipton de 1.5 litros', price: 2.5, category: 'Te', image: require('./images/lipton15.jpg') },
  { id: 5, name: 'Club sandwich', description: 'Un plato de club sandwich personal o para compartir', price: 5, category: 'Sandwiches', image: require('./images/club.jpg')},
  { id: 6, name: 'Iced Latte', description: 'Deliciosa bebida fría', price: 4, category: 'Bebida fría', image: require('./images/late.jpg') },
  { id: 7, name: 'Cappuccino', description: 'Sabroso café caliente', price: 3, category: 'Bebida caliente', image: require('./images/capu.jpg') },
  { id: 8, name: 'Tiramisú de café con chocolate', description: 'Delicioso postre con sabor a café y chocolate', price: 5, category: 'Postres de café', image: require('./images/chocotira.jpg') },
  { id: 9, name: 'Té de manzanilla', description: 'Relajante té de manzanilla', price: 2.5, category: 'Te', image: require('./images/manzanilla.jpg') },
  { id: 10, name: 'Sándwich de pollo y aguacate', description: 'Sabroso sándwich de pollo y aguacate', price: 5, category: 'Sandwiches', image: require('./images/pollo.jpg') }
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const updateQuantity = (item, quantity) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: parseInt(quantity) } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className="App">
      <h1 className="header">Café Himalaya</h1>
      <div className="content">
        <div className="sidebar">
          {categories.map((category) => (
            <div className="category" key={category.name}>
              <h2>{category.name}</h2>
              <div className="product-group">
                {products
                  .filter((product) => product.category === category.name)
                  .map((product, index) => (
                    <div className="product" key={product.id}>
                      <Product product={product} onAddToCart={addToCart} />
                      {index % 2 === 1 && <div className="spacer" />}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <Cart cartItems={cartItems} onRemoveItem={removeItem} onUpdateQuantity={updateQuantity} />
      </div>
    </div>
  );      
}
  export default App;