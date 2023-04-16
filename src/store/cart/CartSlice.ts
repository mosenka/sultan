import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IProduct } from '@/models'

export interface ICartItem extends IProduct {
    count: number
}

export interface ICartState {
    cartProductList: ICartItem[]
    totalSum: number
    totalCount: number
}

const initialState: ICartState = {
    cartProductList: [],
    totalSum: 0,
    totalCount: 0,
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartItem>) => {
            if (
                state.cartProductList.find(
                    item => item.id === action.payload.id
                ) != null
            ) {
                state.cartProductList = state.cartProductList.map(product => {
                    return product.id === action.payload.id
                        ? {
                              ...product,
                              count: product.count + action.payload.count,
                          }
                        : product
                })
            } else {
                state.cartProductList = [
                    ...state.cartProductList,
                    action.payload,
                ]
            }
            state.totalCount = state.cartProductList.reduce(
                (sum: number, current) => sum + current.count,
                0
            )
            state.totalSum = +state.cartProductList
                .reduce((sum: number, item) => sum + item.count * item.price, 0)
                .toFixed(2)
        },
        deleteFromCart: (state, action: PayloadAction<string>) => {
            state.cartProductList = state.cartProductList.filter(
                product => product.id !== action.payload
            )

            state.totalCount = state.cartProductList.reduce(
                (sum: number, current) => sum + current.count,
                0
            )
            state.totalSum = +state.cartProductList
                .reduce((sum: number, item) => sum + item.count * item.price, 0)
                .toFixed(2)
        },
        incrementCount: (state, action: PayloadAction<string>) => {
            state.cartProductList = state.cartProductList.map(product => {
                return product.id === action.payload
                    ? { ...product, count: ++product.count }
                    : product
            })
            state.totalCount = ++state.totalCount

            state.totalSum = +state.cartProductList
                .reduce((sum: number, item) => sum + item.count * item.price, 0)
                .toFixed(2)
        },
        decrementCount: (state, action: PayloadAction<string>) => {
            state.cartProductList = state.cartProductList.map(product => {
                return product.id === action.payload
                    ? {
                          ...product,
                          count:
                              product.count > 0
                                  ? --product.count
                                  : product.count,
                      }
                    : product
            })
            state.totalCount =
                state.totalCount > 0 ? state.totalCount - 1 : state.totalCount

            state.totalSum = +state.cartProductList
                .reduce((sum: number, item) => sum + item.count * item.price, 0)
                .toFixed(2)
        },
    },
})

export default CartSlice.reducer

export const { addToCart, deleteFromCart, incrementCount, decrementCount } =
    CartSlice.actions
