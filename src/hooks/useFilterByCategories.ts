import { useMemo } from 'react'

import { createIdCollection } from '@/helpers/createIdCollection'
import { IProduct } from '@/models'
import { useAppSelector } from '@hooks/useReducer'

export const useFilterByCategories = (productsList: IProduct[]): IProduct[] => {
    const { categories } = useAppSelector(state => state.categoriesReducer)

    const selectedCategoriesList = createIdCollection(categories, 'isSelected')

    const filteredList = useMemo(() => {
        if (selectedCategoriesList.size > 0) {
            return productsList.filter(product =>
                product.categoriesId.some(item =>
                    selectedCategoriesList.has(item)
                )
            )
        }

        return productsList
    }, [productsList, categories])

    return filteredList
}
