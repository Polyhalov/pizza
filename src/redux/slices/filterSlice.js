
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue:'',
    categoryId: 0,
    sort:{
    name: 'популярності',
    sortProp: 'rating'
  }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
      setCategoryId(state,action) {
          state.categoryId = action.payload;   
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
      setSort(state,action) {
          state.sort = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
      }
  },
})

export const selectSort = (state) => state.filterSlice.sort;

export const selectCategoryId = (state) => state.filterSlice.categoryId;

export const selectSortProp = (state) => state.filterSlice.sort.sortProp;

export const selectSearchValue = (state) => state.filterSlice.searchValue;

export const { setCategoryId, setSort, setFilters, setSearchValue  } = filterSlice.actions

export default filterSlice.reducer;