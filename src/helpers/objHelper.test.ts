import { getMaxPrice } from '@/helpers/objHelper'

describe('get max price', () => {
    test('arr objects have price key', () => {
        const obj = [
            { id: 1, name: 'name', price: 11 },
            { id: 2, name: 'name2', price: 10 },
            { id: 3, name: 'name3', price: 12 },
        ]
        expect(getMaxPrice(obj)).toBe(12)
    })

    test('arr objects does not have price key', () => {
        const obj2 = [
            { id: 1, name: 'name' },
            { id: 2, name: 'name2' },
            { id: 3, name: 'name3' },
        ]

        expect(getMaxPrice(obj2)).toBe(0)
    })
})
