import * as React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/hooks'
import { fetchProductById } from '@/api/ProductService'
import { ErrorMessage, LoadingSpinner } from '@/ui'
import { Product } from '@/components'

export const ProductContainer: React.FC = () => {
    const { isLoading, product, error } = useAppSelector(
        state => state.productReducer
    )
    const { id } = useParams()

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(id))
        }
    }, [id])

    if (isLoading) {
        return <LoadingSpinner />
    }
    if (error.length > 0) {
        return <ErrorMessage text={error} />
    }

    return <>{product && <Product product={product} />}</>
}
