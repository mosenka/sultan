import * as React from 'react'

import { Basket } from '@/components'
import { useAppSelector } from '@/hooks'

export const CartIconContainer: React.FC = () => {
    const { totalCount, totalSum } = useAppSelector(state => state.cartReducer)

    return <Basket value={totalSum} count={totalCount} />
}
