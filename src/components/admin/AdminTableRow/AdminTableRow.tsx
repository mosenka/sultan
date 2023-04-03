import { IProduct } from '@/models'
import { Button, EColor, EIcons, Icon, SizeCard } from '@/ui'
import classNames from 'classnames'
import * as React from 'react'
import { useState } from 'react'
import styles from './admintablerow.scss'

interface IAdminTableRowProps {
    product: IProduct
    categories: string[]
    deleteItem: (id: string) => void
    editItem: (product: IProduct) => void
}

export const AdminTableRow: React.FC<IAdminTableRowProps> = ({
    product,
    categories,
    deleteItem,
    editItem,
}) => {
    const { id, img, sizeType, sizeValue, name, price, makers, brand, desc } =
        product

    const [isShortDesc, setIsShortDesc] = useState(true)

    return (
        <tr className={styles.row}>
            <td className={styles.cell}>{id}</td>
            <td className={classNames(styles.cell, styles.imgCell)}>
                <img src={`./img/${img}`} alt={name} className={styles.img} />
            </td>
            <td className={styles.cell}>{name}</td>
            <td className={classNames(styles.cell, styles.cellPrice)}>
                {price} &#8376;
            </td>
            <td className={styles.cell}>
                <SizeCard sizeType={sizeType} sizeValue={sizeValue} />
            </td>
            <td className={styles.cell}>{makers.name}</td>
            <td className={styles.cell}>{brand}</td>
            <td className={styles.cell}>{categories.join(',')}</td>
            <td
                className={classNames(styles.cell, styles.descCell)}
                onClick={() => setIsShortDesc(!isShortDesc)}
            >
                {isShortDesc ? desc.substring(0, 50) : desc}
            </td>
            <td className={classNames(styles.cell, styles.cellButton)}>
                <Button size={'circle'} handlerClick={() => deleteItem(id)}>
                    <Icon icon={EIcons.dumpster} width={20} />
                </Button>
            </td>
            <td className={classNames(styles.cell, styles.cellButton)}>
                <Button size={'circle'} handlerClick={() => editItem(product)}>
                    <Icon icon={EIcons.edit} width={20} stroke={EColor.white} />
                </Button>
            </td>
        </tr>
    )
}
