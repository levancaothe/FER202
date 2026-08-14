import React, { createContext, useContext, useState } from 'react';

export const initialDishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    category: "mains",
    label: "Hot",
    price: "4.99",
    featured: true,
    description: "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
    category: "appetizer",
    label: "",
    price: "1.99",
    featured: false,
    description: "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
  },
  {
    id: 2,
    name: "Vadonut",
    image: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?w=400&q=80",
    category: "appetizer",
    label: "New",
    price: "1.99",
    featured: false,
    description: "A quintessential ConFusion experience, is it a vada or is it a donut?"
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80",
    category: "dessert",
    label: "",
    price: "2.99",
    featured: false,
    description: "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
  }
];

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [dishes] = useState(initialDishes);
  const [cartItems, setCartItems] = useState([]);

  // Add dish to cart or increase quantity
  const addToCart = (dish) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === dish.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      }
      return [...prevItems, { ...dish, quantity: 1 }];
    });
  };

  // Decrease quantity or remove item
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === id);
      if (!existing) return prevItems;
      if (existing.quantity === 1) {
        return prevItems.filter((item) => item.id !== id);
      }
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  // Completely remove dish from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Real-time calculated cart count
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Real-time calculated total value
  const totalValue = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        dishes,
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        totalValue
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
