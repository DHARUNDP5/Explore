import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {axio} from '../../config/axios';

export const getUser = createAsyncThunk('User', async (data) => {

   return axio.get(`/authenticate/login?userEmail=${data.email}&userPassword=${data.pass}`)
})

export const logReducer = createSlice({
    name: 'userdata',
    initialState: {
        loginData: [],
        loading: false
    },
    reducer: {},
    extraReducers: {
        [getUser.pending]: (state, action) => {
            state.loading = true;
        },
        [getUser.fulfilled]: (state, action) => {
            state.loginData = action.payload.data;
            state.loading = false;
        },
        [getUser.rejected]: (state, action) => {

        }
    }
})

const loginReducer = logReducer.reducer;

export default loginReducer;