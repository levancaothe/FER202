import { createSlice } from '@reduxjs/toolkit';

const initialProducts = [
  {
    id: '123456',
    name: 'Example Product 1',
    price: 9.99,
    description: 'This is an example product.',
    catalogs: ['catalog1', 'catalog2'],
  },
  {
    id: '123457',
    name: 'Example Product 2',
    price: 19.99,
    description: 'This is another example product.',
    catalogs: ['catalog2', 'catalog3'],
  },
  {
    id: '123458',
    name: 'Example Product 3',
    price: 29.99,
    description: 'This is a premium example product.',
    catalogs: ['catalog1', 'catalog3'],
  }
];

const initialState = {
  products: initialProducts,
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    deleteFromCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, updateCartQuantity, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
