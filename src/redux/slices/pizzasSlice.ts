import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store';

type FetchPizzasArgs = {
    categoryId: number;
    sortType?: string;
    search: string;
}



type Pizza = {
    id: number;
  title: string;
  types: number[];
  price: number;
  sizes: number[];
  imageUrl: string;
}

export enum Status{
    LOADING = 'loading',
    SUCCESS = 'succes',
    ERROR = 'error'
}

interface PizzaSliceState{
    items: Pizza[] ;
    status: Status}

const initialState:PizzaSliceState = {
    items: [],
    status: Status.LOADING
}

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzasStatus', async (params:FetchPizzasArgs) => {
    const {categoryId,sortType,search } = params;
    const {data} = await axios.get<Pizza[]>(`https://64d5f14a754d3e0f13615c96.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortby=${sortType}&${sortType === 'title' ? `order=asc` : `order=desc`}${search}`);
    return data as Pizza[];
})

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    
      setItems(state, action) {
          state.items = action.payload;
      },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = Status.LOADING;
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = Status.SUCCESS
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = Status.ERROR
                state.items = [];
            })
            
    }
})

export const selectPizza = (state:RootState) => state.pizzasSlice;

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer;