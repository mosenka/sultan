import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchProductById } from '@/api/ProductService'
import { IProduct } from '@models/IProduct'

interface IProductState {
    product: IProduct
    isLoading: boolean
    error: string
}

const initialState: IProductState = {
    product: {
        id: '',
        name: '',
        img: '',
        sizeType: 'weight',
        sizeValue: '',
        makersId: '',
        brand: '',
        price: 0,
        desc: '',
        categoriesId: [],
        makers: {
            id: '',
            name: '',
        },
    },
    isLoading: false,
    error: '',
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: {
        // success
        [fetchProductById.fulfilled.type]: (
            state,
            action: PayloadAction<IProduct>
        ) => {
            state.isLoading = false
            state.error = ''
            state.product = action.payload
        },
        // loading
        [fetchProductById.pending.type]: state => {
            state.isLoading = true
        },
        // error
        [fetchProductById.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default productSlice.reducer

export const {} = productSlice.actions
