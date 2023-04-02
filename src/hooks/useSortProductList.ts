import { useMemo } from 'react'

import { IProduct } from '@/models'
import { useAppSelector } from '@hooks/useReducer'

export const useSortProductList = (productList: IProduct[]): IProduct[] => {
    const { sortingList } = useAppSelector(state => state.sortingReducer)

    const sortField = sortingList.find(item => item.isSelected)

    const sortedProductList = useMemo(() => {
        if (sortField != null) {
            const sort = sortField.key
            switch (sort) {
                case 'name':
                    return [...productList].sort((a, b) =>
                        a[sort].localeCompare(b[sort])
                    )

                case 'price':
                    return [...productList].sort(
                        (a, b) => Number(a[sort]) - Number(b[sort])
                    )
                default:
                    return productList
            }
        }
        return productList
    }, [productList, sortingList])

    if (sortField != null) {
        return sortField?.isReverse
            ? sortedProductList.reverse()
            : sortedProductList
    }

    return sortedProductList
}
