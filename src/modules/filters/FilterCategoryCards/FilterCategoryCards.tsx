import { useEffect } from 'react'
import * as React from 'react'

import styles from './filtercategorycards.scss'

import { fetchCategories } from '@/api/CategoriesService'
import { useAppDispatch, useAppSelector } from '@/hooks'

import { FilterCard, LoadingSpinner, ErrorMessage } from '@/ui'
import { selectCategory } from '@store/categories/CategoriesSlice'

export const FilterCategoryCards: React.FC = () => {
    const { isLoading, error, categories } = useAppSelector(
        state => state.categoriesReducer
    )
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error.length > 0) {
        return <ErrorMessage text={error} />
    }

    const cardsList = categories.map(category => {
        return (
            <FilterCard
                key={category.id}
                text={category.name}
                handlerClick={() => dispatch(selectCategory(category.id))}
                isSelected={category.isSelected}
            />
        )
    })

    return <div className={styles.wrapper}>{cardsList}</div>
}
