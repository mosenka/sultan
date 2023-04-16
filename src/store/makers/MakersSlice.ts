import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchMakers } from '@/api/MakersService'
import { IMaker } from '@/models/IMaker'

export interface IMakersListItem extends IMaker {
    isShow: boolean
    isSelected: boolean
}

interface IMakersState {
    makersList: IMakersListItem[]
    isLoading: boolean
    error: string
}

const initialState: IMakersState = {
    makersList: [],
    isLoading: false,
    error: '',
}

export const MakersSlice = createSlice({
    name: 'makers',
    initialState,
    reducers: {
        selectMaker: (state, action: PayloadAction<string>) => {
            state.makersList = state.makersList.map(maker => {
                return action.payload === maker.id
                    ? { ...maker, isSelected: !maker.isSelected }
                    : maker
            })
        },
        resetSelectedMakers: state => {
            state.makersList = state.makersList.map(maker => {
                return { ...maker, isSelected: false }
            })
        },
    },
    extraReducers: builder => {
        builder.addCase(
            fetchMakers.fulfilled,
            (state, action: PayloadAction<IMaker[]>) => {
                state.isLoading = false
                state.error = ''
                state.makersList = action.payload.map((item, index) => {
                    return { ...item, isSelected: false, isShow: index < 4 }
                })
            }
        )
        builder.addCase(fetchMakers.pending, state => {
            state.isLoading = true
            if (state.error.length > 0) {
                state.error = ''
            }
        })
        builder.addCase(fetchMakers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message as string
        })
    },
})

export default MakersSlice.reducer

export const { selectMaker, resetSelectedMakers } = MakersSlice.actions
