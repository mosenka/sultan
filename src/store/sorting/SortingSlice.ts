import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SORTINGLIST } from './sortinglist'

import { IProduct } from '@/models'

export interface ISortingItem {
    key: keyof IProduct
    name: string
    isReverse: boolean
    isSelected: boolean
}

interface ISortingState {
    sortingList: ISortingItem[]
}

const initialState: ISortingState = {
    sortingList: SORTINGLIST,
}

export const SortingSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        selectItem: (state, action: PayloadAction<string>) => {
            state.sortingList = state.sortingList.map(item => {
                return item.name === action.payload
                    ? { ...item, isSelected: true }
                    : { ...item, isSelected: false }
            })
        },
    },
    extraReducers: {},
})

export default SortingSlice.reducer

export const { selectItem } = SortingSlice.actions
