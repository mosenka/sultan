import { fetchMakers } from '@/api'
import { IProduct } from '@/models'
import cartReducer, {
    addToCart,
    decrementCount,
    deleteFromCart,
    ICartItem,
    ICartState,
    incrementCount,
} from '@store/cart/CartSlice'

describe('CartSlice', () => {
    let initialState: ICartState
    let product: ICartItem

    beforeEach(() => {
        initialState = {
            cartProductList: [],
            totalSum: 0,
            totalCount: 0,
        }

        product = {
            id: 'p1',
            name: 'name',
            img: 'img',
            sizeType: 'weight',
            sizeValue: '11',
            makersId: 'm1',
            brand: 'brand',
            price: 10,
            desc: 'test text',
            categoriesId: ['t1', 't2'],
            makers: {
                id: 'm1',
                name: 'mark',
            },
            count: 1,
        }
    })

    test('add to cart', () => {
        const state = cartReducer(initialState, addToCart(product))

        expect(state.totalCount).toBe(1)
        expect(state.totalSum).toBe(10)
    })

    test('delete from cart', () => {
        const state = cartReducer(
            { ...initialState, cartProductList: [product] },
            deleteFromCart('p1')
        )
        expect(state.totalCount).toBe(0)
        expect(state.totalSum).toBe(0)
        expect(state.cartProductList).toEqual([])
    })

    test('increment count', () => {
        const state = cartReducer(
            { totalCount: 1, totalSum: 10, cartProductList: [product] },
            incrementCount('p1')
        )

        const productItem = state.cartProductList.find(
            product => product.id === 'p1'
        )

        expect(state.totalCount).toBe(2)
        expect(state.totalSum).toBe(20)
        if (productItem) {
            expect(productItem.count).toBe(2)
        }
    })

    test('decrement count', () => {
        const state = cartReducer(
            {
                totalCount: 2,
                totalSum: 20,
                cartProductList: [{ ...product, count: 2 }],
            },
            decrementCount('p1')
        )

        const productItem = state.cartProductList.find(
            product => product.id === 'p1'
        )

        expect(state.totalCount).toBe(1)
        expect(state.totalSum).toBe(10)
        if (productItem) {
            expect(productItem.count).toBe(1)
        }
    })
})
