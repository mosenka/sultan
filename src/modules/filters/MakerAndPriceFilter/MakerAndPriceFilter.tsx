import * as React from 'react'

import styles from './filtersstyle.scss'

import { useAppDispatch } from '@/hooks'
import { MakerFilter, PriceFilter } from '@/modules'
import { Break, Button, EIcons, Icon } from '@/ui'
import { resetSelectedMakers } from '@store/makers/MakersSlice'
import { resetPrices } from '@store/price/PriceSlice'
import { sortProducts } from '@store/productsList/ProductsListSlice'

export const MakerAndPriceFilter: React.FC = () => {
    const dispatch = useAppDispatch()

    const clearFilters = (): void => {
        dispatch(resetSelectedMakers())
        dispatch(resetPrices())
        dispatch(sortProducts())
    }

    return (
        <div className={styles.wrapper}>
            <PriceFilter />
            <MakerFilter />
            <div className={styles.inner}>
                <Button
                    size={'small'}
                    handlerClick={() => dispatch(sortProducts())}
                >
                    Показать
                </Button>
                <Break size={10} />
                <Button size={'circle'} handlerClick={clearFilters}>
                    <Icon icon={EIcons.dumpster} width={20} />
                </Button>
            </div>
        </div>
    )
}
