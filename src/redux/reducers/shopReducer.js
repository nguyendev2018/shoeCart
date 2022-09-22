import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cart: [],
  dataProduct: [],
};

const shopReducer = createSlice({
  name: "shopReducer",
  initialState,
  reducers: {
    //action
    getProductApiAction: (state, action) => {
      state.dataProduct = action.payload.content;
      // oơ day khong can return ...state vi redux toolikt setup san ne muiltitiple(bat bien)
    },
    addCartItem: (state, action) => {
      const cartItem = action.payload;
      const stateCart = state.cart;

      const index = stateCart.findIndex((item) => item.name == cartItem.name);
      if (index !== -1) {
        stateCart[index].quantity++;
      } else {
        stateCart.push(cartItem);
      }
    },
    delItem: (state, action) => {
      const actionCart = action.payload;
      state.cart = state.cart.filter((item) => item.id !== actionCart.id);
    },
    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const itemCart = state.cart.find((item) => item.id === id);
      if (itemCart) {
        itemCart.quantity = quantity;
        if (itemCart.quantity < 1) {
          if (window.confirm("Do you want to del")) {
            state.cart = state.cart.filter((item) => item.id !== id);
          }
        }
      }
    },
  },
});

export const { getProductApiAction, addCartItem, delItem, changeQuantity } =
  shopReducer.actions;

export default shopReducer.reducer;

//Action thunk
const api = "https://shop.cyberlearn.vn/api";
export const getAllProductsApi = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${api}/Product`);
      dispatch(getProductApiAction(data));
    } catch (error) {
      console.log(error);
    }
  };
};
