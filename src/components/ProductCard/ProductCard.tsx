import { useAppDispatch } from '@/hooks'
import { addToCart } from '@store/cart/CartSlice'
import * as React from 'react'

import { IProduct } from '@/models/IProduct'

import { Card, SizeCard, Text, СharacteristicsItem } from '@/ui'

interface IProductItemProps {
    product: IProduct
    children?: React.ReactNode
}

import styles from './productcard.scss'
import { Link } from 'react-router-dom'

export const ProductCard: React.FC<IProductItemProps> = ({
    product,
    children = null,
}) => {
    const { id, img, sizeType, sizeValue, name, price, makers, brand } = product

    const dispatch = useAppDispatch()

    return (
        <Card>
            <div className={styles.wrapper}>
                <div className={styles.imgWrapper}>
                    <img
                        src={`./img/${img}`}
                        alt={name}
                        className={styles.img}
                    />
                </div>
                <SizeCard sizeType={sizeType} sizeValue={sizeValue} />
                <div className={styles.subtitle}>
                    <Text size={16} weight={700} As={'p'}>
                        {makers.name}
                    </Text>
                    <Link to={`/product/${id}`}>
                        <Text size={16} weight={500}>
                            {name}
                        </Text>
                    </Link>
                </div>
                <div className={styles.list}>
                    <СharacteristicsItem
                        name={'производитель'}
                        value={makers.name}
                    />
                    <СharacteristicsItem name={'Бренд'} value={brand} />
                </div>
                <div className={styles.footer}>
                    <Text size={16} weight={700}>
                        {price} &#8376;
                    </Text>
                    {children}
                </div>
            </div>
        </Card>
    )
}