import * as React from 'react'

import styles from './counter.scss'

import { AddButton } from '@/ui'

interface ICounterProps {
    count: number
    handlerReduceButton: () => void
    handlerAddButton: () => void
}

export const Counter: React.FC<ICounterProps> = ({
    count,
    handlerAddButton,
    handlerReduceButton,
}) => {
    return (
        <div className={styles.counterWrapper}>
            <AddButton text={'-'} handlerClick={handlerReduceButton} />
            <span className={styles.count}>{count}</span>
            <AddButton text={'+'} handlerClick={handlerAddButton} />
        </div>
    )
}
