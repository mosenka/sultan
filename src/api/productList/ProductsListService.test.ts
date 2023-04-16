import { fetchProductsList } from '@/api'
import { IProduct } from '@/models'

import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('fetchProductList', () => {
    test('with resolved response', async () => {
        const mockProductList = [
            {
                id: '1',
                name: 'product1',
                img: 'img1',
                sizeType: 'volume',
                sizeValue: 'test',
                makersId: 'm1',
                brand: 'test brand',
                price: 11,
                desc: 'test text',
                makers: {
                    id: 'm1',
                    name: 'test',
                },
                categoriesId: ['t1', 't2'],
            },
        ] as IProduct[]

        const response = { data: mockProductList }

        mockedAxios.get.mockResolvedValue(response)

        const dispatch = jest.fn()
        const thunk = fetchProductsList()

        await thunk(dispatch, () => {}, '')
        const { calls } = dispatch.mock
        expect(calls).toHaveLength(2)

        const [start, end] = calls
        expect(start[0].type).toBe(fetchProductsList.pending.type)
        expect(end[0].type).toBe(fetchProductsList.fulfilled.type)
        expect(end[0].payload).toBe(mockProductList)
    })

    test('with rejected response', async () => {
        mockedAxios.get.mockRejectedValue(
            'Не удалось загрузить каталог товаров'
        )

        const dispatch = jest.fn()
        const thunk = fetchProductsList()

        await thunk(dispatch, () => {}, '')
        const { calls } = dispatch.mock
        expect(calls).toHaveLength(2)

        const [start, end] = calls
        expect(start[0].type).toBe(fetchProductsList.pending.type)
        expect(end[0].type).toBe(fetchProductsList.rejected.type)
        expect(end[0].meta.rejectedWithValue).toBe(true)
        expect(end[0].payload).toBe('Не удалось загрузить каталог товаров')
    })
})
