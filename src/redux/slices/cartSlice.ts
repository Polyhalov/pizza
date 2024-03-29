import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

export type cartItem = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
}

interface cartSliceState{
    totalPrice: number;
    items: cartItem[];
}

const initialState:cartSliceState = {
    totalPrice: 0,
    items:[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //   addItem(state,action) {
    //       state.items.push(action.payload)   
    //       state.totalPrice = state.items.reduce((sum, obj) => {
    //           return obj.price + sum;
    //       }, 0);
    //   },
      addItem(state, action:PayloadAction<cartItem>) {
          const findItem = state.items.find(obj => obj.id === action.payload.id);
          if (findItem) {
              findItem.count ++
          }
          else {
              state.items.push({
                  ...action.payload,
                  count:1,
              })
          }
          state.totalPrice = state.items.reduce((sum, obj) => {
              return (obj.price*obj.count) + sum}, 0);
      },
      plusItem(state, action:PayloadAction<number>) {
          const findItem = state.items.find(obj => obj.id === action.payload);
      if (findItem) {
              findItem.count ++
          }
          state.totalPrice = state.items.reduce((sum, obj) => {
              return (obj.price*obj.count) + sum}, 0);
      },
      minusItem(state, action:PayloadAction<number>) {
          const findItem = state.items.find(obj => obj.id === action.payload);
      if (findItem) {
              findItem.count --
          }  
          state.totalPrice = state.items.reduce((sum, obj) => {
              return (obj.price*obj.count) + sum}, 0);
      },
      removeItem(state, action:PayloadAction<number>) {
          state.items = state.items.filter(obj => obj.id !== action.payload);
          state.totalPrice = state.items.reduce((sum, obj) => {
              return (obj.price*obj.count) + sum}, 0);
      },
      clearItems(state) {
          state.items = [];
          state.totalPrice = 0;
      }
  },
})

export const selectCart = (state:RootState) => state.cartSlice;
export const seelectCartItemById = (id:number) => (state:RootState) => state.cartSlice.items.find((obj) => obj.id === id);

export const { addItem, removeItem, minusItem, plusItem, clearItems } = cartSlice.actions

export default cartSlice.reducer;