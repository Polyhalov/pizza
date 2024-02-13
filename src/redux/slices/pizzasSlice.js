import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzasStatus', async (params, thunkAPI) => {
    const {categoryId,sortType,search } = params;
    const res = await axios.get(`https://64d5f14a754d3e0f13615c96.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortby=${sortType}&${sortType === 'title' ? `order=asc` : `order=desc`}${search}`);
    return res.data;
})

const initialState = {
    items: [],
    status: ''
}

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
                state.status = 'loading';
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = 'error'
                state.items = [];
            })
            
    }
})

export const selectPizza = (state) => state.pizzasSlice;

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer;