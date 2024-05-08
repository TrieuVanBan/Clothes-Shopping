import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types/product'
import { getProducts, readProduct } from '../../lib/product';

export interface IProduct {
  listProducts: Product[],
  productDetail: Product | any,
  quantity: number,
  reprice: number,
  productsSearch: string,
}

const initialState: IProduct = {
  listProducts: [],
  productDetail: null,
  quantity: 1,
  reprice: 0,
  productsSearch: "",
}

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const products = await getProducts();
    return products?.data;
  }
);

export const fetchDetailProduct = createAsyncThunk(
  "product/fetchDetailProduct",
  async (productId: string) => {
    const productDetail = await readProduct(productId);
    return productDetail?.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    incrementQuantity: (state) => {
      state.quantity += 1
    },
    decrementQuantity: (state) => {
      state.quantity > 1 ? state.quantity -= 1 : state.quantity = 1
    },
    searchProducts: (state, action) => {
      state.productsSearch = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.listProducts = action.payload;
      })
      .addCase(fetchDetailProduct.fulfilled, (state, action: PayloadAction<any>) => {
        state.productDetail = action.payload;
      })
  },
})
export const { incrementQuantity, decrementQuantity, searchProducts } = productSlice.actions

export default productSlice.reducer