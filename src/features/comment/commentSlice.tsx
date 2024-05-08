import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createComment, getComments } from '../../lib/comment';
import { toast } from 'react-toastify';
import { Comment } from '../../types/comment';

export interface IComment {
  listComments: Comment[],
}

const initialState: IComment = {
  listComments: [],
}

export const fetchComments = createAsyncThunk(
  "comment/fetchComments",
  async () => {
    const comments = await getComments();
    return comments?.data;
  }
);

export const addComment = createAsyncThunk(
  "comment/addComment",
  async (comment: any) => {
    const commentPro = await createComment(comment);
    toast.success('Cảm ơn bạn đã đánh giá!', { autoClose: 1000 })
    return commentPro?.data;
  }
);

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    // listComment: (state) => {
    //   state.listComments = 
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, action: PayloadAction<any>) => {
        state.listComments = action.payload;
      })
  },
})
export const { } = commentSlice.actions

export default commentSlice.reducer