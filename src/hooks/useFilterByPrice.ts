import { useMemo } from 'react'

import { IProduct } from '@/models'
import { useAppSelector } from '@hooks/useReducer'

export const useFilterByPrice = (
    productsList: IProduct[],
    sort: boolean
): IProduct[] => {
    const { minPrice, maxPrice } = useAppSelector(state => state.priceReducer)

    const filteredList = useMemo(() => {
        if (maxPrice !== 0) {
            return productsList.filter(product => {
                return product.price >= minPrice && product.price <= maxPrice
            })
        }
        return productsList
    }, [productsList, sort])

    return filteredList
}
