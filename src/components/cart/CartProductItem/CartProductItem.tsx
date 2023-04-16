import * as React from 'react'
import { Link } from 'react-router-dom'

import {
    AddButton,
    Break,
    Button,
    DotsSeparator,
    EColor,
    EIcons,
    Icon,
    SizeCard,
    Text,
} from '@/ui'
import { ICartItem } from '@store/cart/CartSlice'

import styles from './cartproductitem.scss'

interface ICartProductItemProps {
    product: ICartItem
    handlerDelete: (id: string) => void
    handlerAddButton: (id: string) => void
    handlerReduceButton: (id: string) => void
}

export const CartProductItem: React.FC<ICartProductItemProps> = ({
    product,
    handlerDelete,
    handlerAddButton,
    handlerReduceButton,
}) => {
    const { id, img, sizeType, sizeValue, name, price, desc, count } = product

    return (
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <img src={`/img/${img}`} alt={name} className={styles.img} />
            </div>
            <div className={styles.textWrapper}>
                <SizeCard sizeType={sizeType} sizeValue={sizeValue} />
                <Link to={`/product/${id}`} className={styles.subtitle}>
                    {name}
                </Link>
                <Break size={10} As={'p'} top />
                <Text size={12} weight={300} As={'p'} color={EColor.fiord}>
                    {desc}
                </Text>
            </div>
            <div className={styles.buttonsWrapper}>
                <DotsSeparator />
                <div className={styles.counterWrapper}>
                    <AddButton
                        text={'-'}
                        handlerClick={() => handlerReduceButton(id)}
                    />
                    <span className={styles.count}>{count}</span>
                    <AddButton
                        text={'+'}
                        handlerClick={() => handlerAddButton(id)}
                    />
                </div>
                <DotsSeparator />
                <div className={styles.price}>
                    <Text
                        size={30}
                        weight={700}
                        tabletSize={24}
                        mobileSize={16}
                    >
                        {(price * count).toFixed(2)} &#8376;
                    </Text>
                </div>
                <DotsSeparator />
                <div className={styles.button}>
                    <Button
                        size={'circle'}
                        handlerClick={() => handlerDelete(id)}
                    >
                        <Icon icon={EIcons.dumpster} width={17} />
                    </Button>
                </div>
            </div>
        </div>
    )
}
