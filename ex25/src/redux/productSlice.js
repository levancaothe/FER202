import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialData = [
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

// Async Thunk: Fetch Products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialData);
    }, 400);
  });
});

// Async Thunk: Add New Product
export const addProductAsync = createAsyncThunk('products/addProductAsync', async (newProduct) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newProduct);
    }, 300);
  });
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    cart: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cart.find((i) => i.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((i) => i.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const { addToCart, updateCartQuantity, deleteFromCart } = productSlice.actions;
export default productSlice.reducer;
