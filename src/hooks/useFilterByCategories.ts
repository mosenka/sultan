import { useMemo } from 'react'

import { IProduct } from '@/models'
import { useAppSelector } from '@hooks/useReducer'

export const useFilterByCategories = (productsList: IProduct[]): IProduct[] => {
    const { categories } = useAppSelector(state => state.categoriesReducer)

    const selectedCategoriesList = new Set()

    categories.forEach(category => {
        if (category.isSelected) {
            selectedCategoriesList.add(category.id)
        }
    })

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
