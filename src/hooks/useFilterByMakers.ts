import { useMemo } from 'react'

import { IProduct } from '@/models'
import { useAppSelector } from '@hooks/useReducer'

export const useFilterByMakers = (
    productsList: IProduct[],
    sort: boolean
): IProduct[] => {
    const { makersList } = useAppSelector(state => state.makersReducer)

    const selectedMakersList = new Set()

    makersList.forEach(maker => {
        if (maker.isSelected) {
            selectedMakersList.add(maker.id)
        }
    })

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
