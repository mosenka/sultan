import { fetchMakers } from '@/api'
import makersReducer from '@store/makers/MakersSlice'

const initialState = {
    makersList: [],
    isLoading: false,
    error: '',
}

describe('MakerSlice', () => {
    test('should change status isLoading status', () => {
        const state = makersReducer(initialState, fetchMakers.pending)
        expect(state.isLoading).toBe(true)
        expect(state.error).toBe('')
    })
    test('should fetch makers List ', () => {
        const makerItem = [
            {
                id: 'd1',
                name: 'test maker',
                isShow: true,
                isSelected: false,
            },
        ]
        const state = makersReducer(
            initialState,
            fetchMakers.fulfilled(makerItem, '')
        )

        expect(state).toEqual({
            isLoading: false,
            error: '',
            makersList: makerItem,
        })
    })
    test('should get error', () => {
        const state = makersReducer(
            initialState,
            fetchMakers.rejected(new Error('ошибка на сервере'), '')
        )
        expect(state.error).toBe('ошибка на сервере')
    })
})
