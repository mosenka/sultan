import { configureStore, combineReducers } from '@reduxjs/toolkit'

import categoriesReducer from './categories/CategoriesSlice'
import makersReducer from './makers/MakersSlice'
import priceReducer from './price/PriceSlice'
import productsListReducer from './productsList/ProductsListSlice'
import sortingReducer from './sorting/SortingSlice'
import productReducer from './product/ProductSlice'
import cartReducer from '@store/cart/CartSlice'
import loginReducer from '@store/auth/AuthSlice'

const rootReducer = combineReducers({
    productsListReducer,
    categoriesReducer,
    makersReducer,
    priceReducer,
    sortingReducer,
    productReducer,
    cartReducer,
    loginReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production',
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
