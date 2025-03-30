import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],  
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
    //   console.log("Adding Product:", action.payload); // Debugging

    //   if (!action.payload || !action.payload.id) {
    //     console.error("Invalid product data:", action.payload);
    //     return;
    //   }

      const isExist = state.products.find((product) => product.id === action.payload.id);

      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        console.log("Item Already Added");
      }

      // Calculate values directly inside the reducer
      state.selectedItems = state.products.reduce((total, product) => total + product.quantity, 0);
      state.totalPrice = state.products.reduce((total, product) => total + product.quantity * product.price, 0);
      state.tax = state.totalPrice * state.taxRate;
      state.grandTotal = state.totalPrice + state.tax;
    }
  }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
