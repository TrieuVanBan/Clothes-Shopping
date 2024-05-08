import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types/user';
import { createUser, getUsers } from '../../lib/user';
import { ToastContainer, toast } from 'react-toastify';

export interface IUser {
  listUsers: User[],
}

const initialState: IUser = {
  listUsers: [],
}

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async () => {
    const products = await getUsers();
    return products?.data;
  }
);

export const addUser = createAsyncThunk(
  "user/addUser",
  async (user: User) => {
    if (user.email && user.name && user.name && user.password) {
      const userAdd = await createUser(user);
      toast.success('Đăng ký thành công!')
      return userAdd?.data;
    } else (
      toast.warning('Nhập đầy đủ thông tin!')
    )
  }
);

export const productSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // searchProducts: (state, action) => {
    //   state.productsSearch = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.listUsers = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.listUsers = [...state.listUsers, action.payload];
        console.log(state.listUsers);
      })
  },
})
export const { } = productSlice.actions

export default productSlice.reducer