import * as React from 'react'
import { useEffect, useState } from 'react'

import styles from './productslist.scss'

import { fetchProductsList } from '@/api/productList/ProductsListService'

import { ProductCard } from '@/components'
import { getMaxPrice } from '@/helpers/objHelper'
import { useAppSelector, useAppDispatch } from '@/hooks'

import { IProduct } from '@/models'
import { CartButtonContainer } from '@/modules'
import { setInitPrice } from '@/store/price/PriceSlice'

import { LoadingSpinner, ErrorMessage, Pagination } from '@/ui'
import { useProductList } from '@hooks/useProductList'

export const ProductsList: React.FC = () => {
    const dispatch = useAppDispatch()
    const { isLoading, productsList, error, isSorted } = useAppSelector(
        state => state.productsListReducer
    )
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [perPage] = useState(6)

    const sortedProductsList = useProductList(productsList, isSorted)

    const [currentPageProductsList, setCurrentPageProductsList] = useState<
        IProduct[]
    >([])

    useEffect(() => {
        const startIndex = (currentPage - 1) * perPage
        setCurrentPageProductsList(
            [...sortedProductsList].splice(startIndex, perPage)
        )
    }, [sortedProductsList, currentPage, perPage])

    useEffect(() => {
        if (sortedProductsList.length === 0) return
        setCurrentPage(1)
    }, [sortedProductsList])

    useEffect(() => {
        dispatch(fetchProductsList())
    }, [])

    useEffect(() => {
        if (productsList.length === 0) return

        const maxValue = getMaxPrice(productsList)
        dispatch(setInitPrice(maxValue))
    }, [productsList])

    const handlerPaginate = (num: number): void => {
        setCurrentPage(num)
    }

    const handlerNextPage = (): void => {
        if (currentPage < Math.ceil(sortedProductsList.length / perPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlerPreviosPage = (): void => {
        if (
            currentPage <= Math.ceil(sortedProductsList.length / perPage) &&
            currentPage > 1
        ) {
            setCurrentPage(currentPage - 1)
        }
    }

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error.length > 0) {
        return <ErrorMessage text={error} />
    }

    const list = currentPageProductsList?.map(product => {
        return (
            <div key={product.id} className={styles.item}>
                <ProductCard product={product}>
                    <CartButtonContainer product={product} />
                </ProductCard>
            </div>
        )
    })

    return (
        <>
            <div className={styles.wrapper}>
                {list}
                <Pagination
                    paginate={handlerPaginate}
                    currentPage={currentPage}
                    perPage={perPage}
                    totalCount={sortedProductsList.length}
                    nextPage={handlerNextPage}
                    previousPage={handlerPreviosPage}
                />
            </div>
        </>
    )
}
