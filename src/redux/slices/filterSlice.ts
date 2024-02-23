
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Sort = {
  name: string;
  sortProp: string;
}

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  sort: Sort;
}
const initialState:FilterSliceState = {
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
      setCategoryId(state,action:PayloadAction<number>) {
          state.categoryId = action.payload;   
    },
    setSearchValue(state, action:PayloadAction<string>) {
      state.searchValue = action.payload;
    },
      setSort(state,action:PayloadAction<Sort>) {
          state.sort = action.payload;
    },
    setFilters(state, action:PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.categoryId = Number(action.payload.categoryId);
        state.sort = action.payload.sort;
      }
      else {
        state.categoryId = 0;
        state.sort = {
          name: "популярности",
          sortProp: "rating"
        }
      }
      }
  },
})

export const selectSort = (state:RootState) => state.filterSlice.sort;

export const selectCategoryId = (state:RootState) => state.filterSlice.categoryId;

export const selectSortProp = (state:RootState) => state.filterSlice.sort.sortProp;

export const selectSearchValue = (state:RootState) => state.filterSlice.searchValue;

export const { setCategoryId, setSort, setFilters, setSearchValue  } = filterSlice.actions

export default filterSlice.reducer;

//state.sort = action.payload.sort;
   //   state.categoryId = Number(action.payload.categoryId);