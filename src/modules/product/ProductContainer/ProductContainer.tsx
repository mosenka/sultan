import * as React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchProductById } from '@/api/product/ProductService'
import { Product } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { ErrorMessage, LoadingSpinner } from '@/ui'

export const ProductContainer: React.FC = () => {
    const { isLoading, product, error } = useAppSelector(
        state => state.productReducer
    )
    const { id } = useParams()

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id == null || id.length === 0) return

        dispatch(fetchProductById(id))
    }, [id])

    if (isLoading) {
        return <LoadingSpinner />
    }
    if (error.length > 0) {
        return <ErrorMessage text={error} />
    }

    return (
        <>
            <Product product={product} />
        </>
    )
}
