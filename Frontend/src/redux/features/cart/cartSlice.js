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

      const isExist = state.products.find((product) => product._id === action.payload._id);

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
    },
    updateQuanity: (state, action) => {
        const products = state.products.map((product) => {
            if(product._id == action.payload._id) {
                if(action.payload.type === "increment") {
                    product.quantity +=1
                } else if(action.payload.type === "decrement"){
                    if(product.quantity > 1) {
                        product.quantity -=1
                    }
                }
            }
            return product
        })
        
        state.selectedItems = state.products.reduce((total, product) => total + product.quantity, 0);
        state.totalPrice = state.products.reduce((total, product) => total + product.quantity * product.price, 0);
        state.tax = state.totalPrice * state.taxRate;
        state.grandTotal = state.totalPrice + state.tax;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((product)=> product._id !== action.payload._id)
      state.selectedItems = state.products.reduce((total, product) => total + product.quantity, 0);
      state.totalPrice = state.products.reduce((total, product) => total + product.quantity * product.price, 0);
      state.tax = state.totalPrice * state.taxRate;
      state.grandTotal = state.totalPrice + state.tax;
    }, 
    clearCart: (state) => {
      state.products = []
      state.selectedItems = 0
      state.totalPrice = 0
      state.tax = 0
      state.grandTotal = 0
    }
  }
})

export const { addToCart, updateQuanity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;