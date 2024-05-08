import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types/product'
import { addItemCart, getCarts, removeItemCart } from '../../lib/cart';

export interface IProduct {
  carts: Product[],
  totalQuantity: number,
  totalPrice: number,
}

// export interface Cart {
//   item: Product
//   carts: Product[],
// }

const initialState: IProduct = {
  carts: [],
  totalQuantity: 0,
  totalPrice: 0,
}
// export const AddItemCart = createAsyncThunk(
//   "cart/AddItemCart",
//   async (obj: Cart) => {
//     const { carts, item } = obj
//     let find = carts.findIndex(data => data.id === item.id)
//     if (find > 0) {
//       carts[find].quantity + 1
//     } else {
//       const cartItem = await addItemCart(item);
//       return cartItem?.data;
//     }

//   }
// );

// export const AddItemCart = createAsyncThunk(
//   "cart/AddItemCart",
//   async (item: Product) => {
//     const cartItem = await addItemCart(item);
//     return cartItem?.data;
//   }
// );

// export const ListCart = createAsyncThunk(
//   "cart/ListCart",
//   async () => {
//     const list = await (getCarts());
//     return list?.data;
//   }
// );

// export const RemoveCart = createAsyncThunk(
//   "cart/RemoveCart",
//   async (id: number) => {
//     const item = await (removeItemCart(id));
//     console.log("itemRemove", item.data);
//     return item?.data;
//   }
// );

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // incrementQuantity: (state) => {
    //   state.quantity += 1
    // },
    // decrementQuantity: (state) => {
    //   state.quantity > 1 ? state.quantity -= 1 : state.quantity = 1
    // }
    addToCart: (state, action) => {
      let find = state.carts.findIndex((item) => item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size);
      if (find >= 0) {
        state.carts[find].quantity += 1;
      } else {
        toast.success('Đã thêm sản phẩm vào giỏ hàng!', { autoClose: 1000 })
        state.carts.push(action.payload);
      }
    },
    deleteCart: (state, action) => {
      if (window.confirm('Bạn có muốn xóa sản phẩm này?')) {
        state.carts = state.carts.filter(item => item.id !== action.payload)
      }
    },
    deleteCartAll: (state) => {
      if (window.confirm('Bạn có muốn xóa tất cả sản phẩm?')) {
        state.carts = []
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.carts.reduce((cartTotal, cartItem) => {
        // console.log(cartTotal);
        // console.log(cartItem);
        const { quantity, reprice } = cartItem
        // console.log("quantity, reprice", quantity, reprice);
        const itemTotal = reprice * quantity
        cartTotal.totalPrice += itemTotal;
        cartTotal.totalQuantity += quantity;
        return cartTotal;
      }, {
        totalPrice: 0,
        totalQuantity: 0,
      });
      state.totalQuantity = totalQuantity;
      state.totalPrice = parseInt(totalPrice.toFixed(2));
    },
    increaseItemQuantity: (state, action) => {
      state.carts = state.carts.map((item) => {
        if (item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.carts = state.carts.map((item) => {
        if (item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size) {
          return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
        }
        return item;
      });
    },
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
export const { addToCart, deleteCart, getCartTotal, increaseItemQuantity, decreaseItemQuantity, deleteCartAll } = cartSlice.actions

export default cartSlice.reducer