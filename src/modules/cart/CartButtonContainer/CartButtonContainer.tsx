import { useEffect, useState } from 'react'

import * as React from 'react'

import { CartButton, Counter } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { IProduct } from '@/models'
import {
    addToCart,
    decrementCount,
    ICartItem,
    incrementCount,
} from '@store/cart/CartSlice'

interface ICartButtonContainerProps {
    product: IProduct
}

export const CartButtonContainer: React.FC<ICartButtonContainerProps> = ({
    product,
}) => {
    const { cartProductList } = useAppSelector(state => state.cartReducer)

    const dispatch = useAppDispatch()

    const [cartProduct, setCartProduct] = useState<ICartItem>()

    useEffect(() => {
        if (cartProductList.length === 0) return
        if (!product) return
        if (product.id.length === 0) return

        const cartProduct = cartProductList.find(item => item.id === product.id)
        setCartProduct(cartProduct)
    }, [cartProductList])

    if (cartProduct == null || cartProduct.count === 0) {
        return (
            <CartButton
                handlerClick={() =>
                    dispatch(addToCart({ ...product, count: 1 }))
                }
            />
        )
    }

    return (
        <Counter
            count={cartProduct.count}
            handlerReduceButton={() => dispatch(decrementCount(cartProduct.id))}
            handlerAddButton={() => dispatch(incrementCount(cartProduct.id))}
        />
    )
}
