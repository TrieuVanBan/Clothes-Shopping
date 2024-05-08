import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types/product'
import { addItemCart, getCarts, removeItemCart } from '../../lib/cart';

export interface IFavorite {
  favorites: Product[]
}

const initialState: IFavorite = {
  favorites: [],
}

export const favoriteSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      let find = state.favorites.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.favorites[find].quantity = 1;
      } else {
        state.favorites.push(action.payload);
        toast.success('Sản phẩm đã thêm vào yêu thích thành công!', { autoClose: 1000 })
      }
    },
    deleteFavorite: (state, action) => {
      if (window.confirm('Bạn có muốn xóa sản phẩm này?')) {
        state.favorites = state.favorites.filter(item => item.id !== action.payload)
      }
    },
    deleteFavoriteAll: (state) => {
      if (window.confirm('Bạn có muốn xóa tất cả sản phẩm?')) {
        state.favorites = []
      }
    }
  },
  extraReducers: (builder) => {
    builder
    // .addCase(ListCart.fulfilled, (state, action) => {
    //   state.carts = action.payload;
    // })
    // .addCase(AddItemCart.fulfilled, (state, action: PayloadAction<Product>) => {
    //   let find = state.carts.findIndex(item => item.id === action.payload.id)
    //   if (find > 0) {
    //     state.carts[find].quantity++
    //   } else {
    //     state.carts.push(action.payload)
    //   }
    // })
    // .addCase(RemoveCart.fulfilled, (state, action) => {
    //   state.carts = state.carts.filter((item: Product) => item.id !== action.payload.id)
    // })
  },
})
export const { addToFavorite, deleteFavorite, deleteFavoriteAll } = favoriteSlice.actions

export default favoriteSlice.reducer