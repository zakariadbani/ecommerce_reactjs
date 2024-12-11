import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Cart } from "../constants/types";

const initialState: Cart = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existing = state.products.find(
        (p) => p.product.id === action.payload.id
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.products.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (p) => p.product.id !== action.payload
      );
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const existing = state.products.find(
        (p) => p.product.id === action.payload.id
      );
      if (existing) {
        existing.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
