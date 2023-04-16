import * as React from 'react'

import { useState } from 'react'

import styles from './cartcontainer.scss'

import { CartProductItem, Popup } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { Button, Container, EColor, EIcons, Icon, Text, Title } from '@/ui'
import {
    decrementCount,
    deleteFromCart,
    incrementCount,
} from '@store/cart/CartSlice'

export const CartContainer: React.FC = () => {
    const { cartProductList, totalSum } = useAppSelector(
        state => state.cartReducer
    )
    const dispatch = useAppDispatch()

    const [isShowPopup, setIsShowPopup] = useState(false)

    const productsList = cartProductList?.map(product => {
        return (
            <CartProductItem
                key={product.id}
                product={product}
                handlerDelete={() => dispatch(deleteFromCart(product.id))}
                handlerAddButton={() => dispatch(incrementCount(product.id))}
                handlerReduceButton={() => dispatch(decrementCount(product.id))}
            />
        )
    })

    return (
        <>
            <div className={styles.wrapper}>
                <Container>
                    <Title text={'Корзина'} />
                    {cartProductList.length > 0 ? (
                        productsList
                    ) : (
                        <p data-testid="empty-cart"> ничего нет</p>
                    )}

                    <div className={styles.inner}>
                        <div className={styles.buttonsWrapper}>
                            <Button handlerClick={() => setIsShowPopup(true)}>
                                оформить заказ
                            </Button>
                        </div>
                        <div className={styles.totalCount}>
                            <Text size={30} weight={700}>
                                {totalSum}&#8376;
                            </Text>
                        </div>
                    </div>
                </Container>
            </div>
            {cartProductList.length > 0 ? (
                <Popup
                    isOpen={isShowPopup}
                    closePopup={() => setIsShowPopup(false)}
                >
                    <div className={styles.message}>
                        <div className={styles.iconWrapper}>
                            <Icon
                                icon={EIcons.accepted}
                                width={20}
                                stroke={EColor.white}
                            />
                        </div>
                        <h2 className={styles.title}>Спасибо за заказ</h2>
                        <Text size={16} weight={300}>
                            Наш менеджер свяжется с вами в ближайшее время
                        </Text>
                    </div>
                </Popup>
            ) : (
                <></>
            )}
        </>
    )
}
