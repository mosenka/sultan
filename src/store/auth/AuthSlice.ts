import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct, IUser } from '@/models'

import { login } from '@/api/LoginService'
import { CartSlice } from '@store/cart/CartSlice'

interface ILoginState {
    isAuth: boolean
    isLoading: boolean
    error: string
}

const initialState: ILoginState = {
    isAuth: false,
    isLoading: false,
    error: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsAuth: state => {
            state.isAuth = true
        },
    },
    extraReducers: {
        [login.fulfilled.type]: (state, action: PayloadAction<boolean>) => {
            state.isLoading = false
            state.isAuth = action.payload
            state.error = action.payload ? '' : 'Не верные имя или пароль'
        },
        // loading
        [login.pending.type]: state => {
            state.isLoading = true
        },
        // error
        [login.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default loginSlice.reducer

export const { setIsAuth } = loginSlice.actions
