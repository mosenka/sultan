import { Counter } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { addToCart } from '@store/cart/CartSlice'
import classNames from 'classnames'
import * as React from 'react'
import { useEffect, useState } from 'react'
import styles from './product.scss'

import { IProduct } from '@/models'
import {
    AddButton,
    Break,
    Button,
    Card,
    ContainerFlex,
    EColor,
    EIcons,
    Icon,
    SizeCard,
    Text,
    СharacteristicsItem,
} from '@/ui'

interface IProductProps {
    product: IProduct
}

export const Product: React.FC<IProductProps> = ({ product }) => {
    const { id, img, name, sizeValue, sizeType, price, makers, desc, brand } =
        product

    const { cartProductList } = useAppSelector(state => state.cartReducer)
    const [countInCart, setCountInCart] = useState(0)

    useEffect(() => {
        if (cartProductList.length === 0) return

        const cartItem = cartProductList.find(item => item.id === id)

        if (cartItem) {
            setCountInCart(cartItem.count)
        }
    }, [cartProductList])

    const dispatch = useAppDispatch()

    const [isOpenDesc, setIsOpenDesc] = useState(true)
    const [isOpenCharacteristics, setIsOpenCharacteristics] = useState(true)
    const [count, setCount] = useState(1)

    return (
        <>
            <ContainerFlex>
                <div className={styles.imgWrapper}>
                    <img
                        src={`/img/${img}`}
                        alt={name}
                        className={styles.img}
                    />
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.available}>в наличии</p>
                    <h1 className={styles.title}>
                        <Text size={30} weight={800} tabletSize={24}>
                            {makers.name}
                        </Text>
                        <Break size={4} />
                        <Text size={30} tabletSize={24}>
                            {name}
                        </Text>
                    </h1>
                    <SizeCard sizeValue={sizeValue} sizeType={sizeType} />
                    <div className={styles.inner}>
                        <div className={styles.price}>
                            <Text size={30} weight={800}>
                                {price} &#8376;
                            </Text>
                        </div>
                        <div className={styles.countWrapper}>
                            <Counter
                                count={count}
                                handlerReduceButton={() =>
                                    setCount(prev =>
                                        prev > 1 ? prev - 1 : prev
                                    )
                                }
                                handlerAddButton={() =>
                                    setCount(prev => prev + 1)
                                }
                            />
                        </div>
                        <Button
                            handlerClick={() =>
                                dispatch(
                                    addToCart({ ...product, count: count })
                                )
                            }
                        >
                            <Text weight={700} color={EColor.white}>
                                {countInCart > 0
                                    ? `В корзине ${countInCart}`
                                    : 'В корзину'}
                            </Text>
                            <Break size={10} />
                            <Icon icon={EIcons.basket} width={20} />
                        </Button>
                        <div className={styles.mobSharing}>
                            <Card>
                                <a href="/" className={styles.share}>
                                    <Icon icon={EIcons.share} width={20} />
                                </a>
                            </Card>
                        </div>
                    </div>
                    <div
                        className={classNames(
                            styles.inner,
                            styles.buttonsPanel
                        )}
                    >
                        <div className={styles.desktopSharing}>
                            <Card>
                                <a href="/" className={styles.share}>
                                    <Icon icon={EIcons.share} width={20} />
                                </a>
                            </Card>
                        </div>
                        <Break size={10} mobileSize={'0'} />
                        <Card>
                            <div className={styles.action}>
                                <Text size={12} color={EColor.fiord}>
                                    При покупке от{' '}
                                    <Text weight={700} color={EColor.fiord}>
                                        10 000 ₸{' '}
                                    </Text>{' '}
                                    бесплатная доставка по Кокчетаву и области
                                </Text>
                            </div>
                        </Card>
                        <Break size={10} mobileSize={'0'} />
                        <div className={styles.innerItem}>
                            <Card>
                                <a href="/" className={styles.download}>
                                    <Text weight={700} color={EColor.fiord}>
                                        Прайс лист
                                    </Text>
                                    <Break size={10} />
                                    <Icon
                                        icon={EIcons.download}
                                        width={11}
                                        fill={EColor.fiord}
                                    />
                                </a>
                            </Card>
                        </div>
                    </div>
                    <div className={styles.characteristics}>
                        <СharacteristicsItem name={'Бренд'} value={brand} />
                        <СharacteristicsItem
                            name={'Производитель'}
                            value={makers.name}
                        />
                        <СharacteristicsItem name={'Артикул'} value={id} />
                    </div>
                    <div className={styles.desc}>
                        <div
                            className={styles.descTitle}
                            onClick={() => setIsOpenDesc(!isOpenDesc)}
                        >
                            <Text size={16} weight={500}>
                                Описание
                            </Text>
                            <span
                                className={classNames(styles.icon, {
                                    [styles['hidden']]: isOpenDesc,
                                })}
                            >
                                <Icon icon={EIcons.arrowFull} width={7} />
                            </span>
                        </div>
                        {isOpenDesc && (
                            <div className={styles.descText}>{desc}</div>
                        )}
                    </div>
                    <div className={styles.characteristics}>
                        <div
                            className={styles.descTitle}
                            onClick={() =>
                                setIsOpenCharacteristics(!isOpenCharacteristics)
                            }
                        >
                            <Text size={16} weight={500}>
                                Характеристики
                            </Text>
                            <span
                                className={classNames(styles.icon, {
                                    [styles['hidden']]: isOpenCharacteristics,
                                })}
                            >
                                <Icon icon={EIcons.arrowFull} width={7} />
                            </span>
                        </div>
                        {isOpenCharacteristics && (
                            <div className={styles.list}>
                                <СharacteristicsItem
                                    name={'Бренд'}
                                    value={brand}
                                />
                                <СharacteristicsItem
                                    name={'Производитель'}
                                    value={makers.name}
                                />
                                <СharacteristicsItem
                                    name={'Артикул'}
                                    value={id}
                                />
                                <СharacteristicsItem
                                    name={'Назначение'}
                                    value={brand}
                                />
                                <СharacteristicsItem
                                    name={'Вес'}
                                    value={sizeValue}
                                />
                                <СharacteristicsItem
                                    name={'Количество в коробке'}
                                    value={sizeValue}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </ContainerFlex>
        </>
    )
}
