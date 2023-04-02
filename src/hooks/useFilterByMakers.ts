import { useMemo } from 'react'

import { createIdCollection } from '@/helpers/createIdCollection'
import { IProduct } from '@/models'
import { useAppSelector } from '@hooks/useReducer'

export const useFilterByMakers = (
    productsList: IProduct[],
    sort: boolean
): IProduct[] => {
    const { makersList } = useAppSelector(state => state.makersReducer)

    const selectedMakersList = createIdCollection(makersList, 'isSelected')

    const filteredList = useMemo(() => {
        if (selectedMakersList.size > 0) {
            return productsList.filter(product => {
                return selectedMakersList.has(product.makersId)
            })
        }
        return productsList
    }, [productsList, sort])

    return filteredList
}
