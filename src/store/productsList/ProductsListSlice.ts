import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchProductsList } from '@/api/ProductsListService'
import { IProduct } from '@models/IProduct'

interface IProductsListState {
    productsList: IProduct[]
    isLoading: boolean
    error: string
    isSorted: boolean
}

const initialState: IProductsListState = {
    productsList: [],
    isLoading: false,
    error: '',
    isSorted: false,
}

export const productsListSlice = createSlice({
    name: 'productsList',
    initialState,
    reducers: {
        sortProducts: state => {
            state.isSorted = !state.isSorted
        },
        getProductsByMakers: (
            state: IProductsListState,
            action: PayloadAction<string>
        ) => {
            state.productsList = state.productsList.filter(
                item => item.makersId === action.payload
            )
        },
    },
    extraReducers: {
        // success
        [fetchProductsList.fulfilled.type]: (
            state,
            action: PayloadAction<IProduct[]>
        ) => {
            state.isLoading = false
            state.error = ''
            state.productsList = action.payload
        },
        // loading
        [fetchProductsList.pending.type]: state => {
            state.isLoading = true
        },
        // error
        [fetchProductsList.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default productsListSlice.reducer

export const { getProductsByMakers, sortProducts } = productsListSlice.actions
