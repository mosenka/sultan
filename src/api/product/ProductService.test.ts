import { fetchProductById } from '@/api'
import { IMaker } from '@/models'
import { TSizeType } from '@models/IProduct'

describe('fetchProductById', () => {
    test('test fetch', async () => {
        const mockProduct = {
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
        }

        const dispatch = jest.fn()
        const thunk = fetchProductById('p1')

        await thunk(dispatch, () => {}, '')
        const { calls } = dispatch.mock

        expect(calls).toHaveLength(2)
    })
})
