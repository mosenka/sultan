import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchCategories } from '@/api/CategoriesService'
import { ICategory } from '@models/ICategory'

export interface ICategoryItem extends ICategory {
    isSelected: boolean
}

interface ICategoriesState {
    categories: ICategoryItem[]
    isLoading: boolean
    error: string
}

const initialState: ICategoriesState = {
    categories: [],
    isLoading: false,
    error: '',
}

export const CategoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        selectCategory: (state, action: PayloadAction<string>) => {
            state.categories = state.categories.map(category => {
                return category.id === action.payload
                    ? { ...category, isSelected: !category.isSelected }
                    : category
            })
        },
        resetSelectedCategories: state => {
            state.categories = state.categories.map(categoty => {
                return { ...categoty, isSelected: false }
            })
        },
    },
    extraReducers: {
        // success
        [fetchCategories.fulfilled.type]: (
            state: ICategoriesState,
            action: PayloadAction<ICategory[]>
        ) => {
            state.isLoading = false
            state.error = ''
            state.categories = action.payload.map(category => {
                return { ...category, isSelected: false }
            })
        },
        // loading
        [fetchCategories.pending.type]: state => {
            state.isLoading = true
        },
        // error
        [fetchCategories.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default CategoriesSlice.reducer

export const { selectCategory, resetSelectedCategories } =
    CategoriesSlice.actions
