import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchProductsList } from '@/api/productList/ProductsListService'
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
        addNewProduct: (state, action: PayloadAction<IProduct>) => {
            const product = action.payload

            state.productsList.push(product)
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            const id = action.payload
            state.productsList = state.productsList.filter(
                product => product.id !== id
            )
        },
        editProduct: (state, action: PayloadAction<IProduct>) => {
            state.productsList = state.productsList.map(product => {
                return product.id === action.payload.id
                    ? action.payload
                    : product
            })
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

export const { sortProducts, addNewProduct, deleteProduct, editProduct } =
    productsListSlice.actions
