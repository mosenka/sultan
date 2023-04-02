import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IPriceState {
    minPrice: number
    maxPrice: number
    initMaxPrice: number
}

const initialState: IPriceState = {
    minPrice: 0,
    maxPrice: 0,
    initMaxPrice: 10,
}

export const PriceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        setInitPrice: (state, action: PayloadAction<number>) => {
            state.initMaxPrice = action.payload
            state.maxPrice = action.payload
        },
        setMaxPrice: (state, action: PayloadAction<number>) => {
            if (isFinite(action.payload)) {
                state.maxPrice =
                    action.payload > state.minPrice
                        ? action.payload
                        : state.minPrice
            }
        },
        setMinPrice: (state, action: PayloadAction<number>) => {
            if (isFinite(action.payload)) {
                state.minPrice =
                    action.payload < state.maxPrice
                        ? action.payload
                        : state.maxPrice
            }
        },
        resetPrices: state => {
            state.maxPrice = state.initMaxPrice
            state.minPrice = 0
        },
    },
    extraReducers: {},
})

export default PriceSlice.reducer

export const { setMaxPrice, setMinPrice, setInitPrice, resetPrices } =
    PriceSlice.actions
