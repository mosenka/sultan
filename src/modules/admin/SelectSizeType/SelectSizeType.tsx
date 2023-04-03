import { TSizeType } from '@models/IProduct'
import * as React from 'react'
import styles from './selectsizetype.scss'

interface ISelectSizeTypeProps {
    name: string
    value: TSizeType
    handleChange: (e: React.ChangeEvent<any>) => void
}

export const SelectSizeType: React.FC<ISelectSizeTypeProps> = ({
    name,
    value,
    handleChange,
}) => {
    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={'s'}>
                тип размера
            </label>
            <select
                name={name}
                value={value}
                onChange={handleChange}
                className={styles.select}
                id={'s'}
            >
                <option value="weight">Вес</option>
                <option value="volume">Объем</option>
            </select>
        </div>
    )
}
