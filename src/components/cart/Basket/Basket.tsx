import * as React from 'react'
import { Link } from 'react-router-dom'

import { EColor, EIcons, Icon, Text } from '@/ui'
import styles from './basket.scss'

interface IBasketProps {
    value: number
    count?: number
}

export const Basket: React.FC<IBasketProps> = ({ value, count = 3 }) => {
    return (
        <Link to={'/cart'} className={styles.wrapper}>
            <span className={styles.icon_wrapper}>
                <Icon icon={EIcons.basket} width={40} fill={EColor.fiord} />
                <span className={styles.count}>{count}</span>
            </span>
            <span className={styles.text_wrapper}>
                <Text size={12} weight={300} As={'p'}>
                    Корзина
                </Text>
                <Text size={14} weight={600} color={EColor.grey11} As={'p'}>
                    {value} &#8376;
                </Text>
            </span>
        </Link>
    )
}
