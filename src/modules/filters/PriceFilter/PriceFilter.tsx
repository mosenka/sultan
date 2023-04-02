import { useState } from 'react'
import * as React from 'react'

import styles from './pricefilter.scss'

import { useAppDispatch, useAppSelector } from '@/hooks'

import { setMaxPrice, setMinPrice } from '@/store/price/PriceSlice'
import { EColor, Text, Break, InputPrice } from '@/ui'

interface IPriceFilterProps {}

export const PriceFilter: React.FC<IPriceFilterProps> = ({}) => {
    const { maxPrice, minPrice } = useAppSelector(state => state.priceReducer)
    const [isError, setIsError] = useState(false)
    const dispatch = useAppDispatch()

    const handlerMinPriceInput = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement

        dispatch(setMinPrice(+target.value))
    }

    const handlerMaxPriceInput = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement

        dispatch(setMaxPrice(+target.value))
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>
                <Text weight={300} color={EColor.fiord}>
                    Цена
                </Text>
                <Break size={4} />
                &#8376;
            </p>
            <p className={styles.form}>
                <InputPrice
                    value={minPrice}
                    handlerChange={handlerMinPriceInput}
                />
                -
                <InputPrice
                    value={maxPrice}
                    handlerChange={handlerMaxPriceInput}
                />
            </p>
        </div>
    )
}
