import { useEffect } from 'react'
import * as React from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks'
import {
    Break,
    DotsSeparator,
    EColor,
    ErrorMessage,
    LoadingSpinner,
    Text,
} from '@/ui'
import { selectCategory } from '@store/categories/CategoriesSlice'
import { fetchCategories } from '@/api/CategoriesService'

export const TypesFilter: React.FC = () => {
    const { isLoading, error, categories } = useAppSelector(
        state => state.categoriesReducer
    )
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const typesList = categories?.map(item => {
        return (
            <div
                key={item.id}
                style={{ cursor: 'pointer' }}
                onClick={() => dispatch(selectCategory(item.id))}
            >
                <Text color={item.isSelected ? EColor.gold : EColor.black}>
                    {item.name}
                </Text>
                <Break size={10} top As={'p'} />
            </div>
        )
    })

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error.length > 0) {
        return <ErrorMessage text={error} />
    }

    return (
        <div style={{ paddingTop: '30px' }}>
            <Text size={16} weight={500} color={EColor.grey11}>
                Уход за телом
            </Text>
            <Break size={15} top As={'p'} />
            <div className="list">{typesList}</div>
            <DotsSeparator isHorizontal />
        </div>
    )
}
