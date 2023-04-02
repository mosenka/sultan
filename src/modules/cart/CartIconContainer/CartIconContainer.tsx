import * as React from 'react'
import { Basket } from '@/components'
import { useAppSelector } from '@/hooks'

interface ICartIconContainerProps {}

export const CartIconContainer: React.FC<ICartIconContainerProps> = ({}) => {
    const { totalCount, totalSum } = useAppSelector(state => state.cartReducer)

    return <Basket value={totalSum} count={totalCount} />
}
