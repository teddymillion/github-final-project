import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.total += item.price;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex(i => i.id === id);
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.total -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        const diff = quantity - item.quantity;
        item.quantity = quantity;
        state.total += diff * item.price;
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;