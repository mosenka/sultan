import classNames from 'classnames'
import * as React from 'react'

import styles from './filtercard.scss'

interface IFilterCardProps {
    text: string
    handlerClick: () => void
    isSelected?: boolean
}

export const FilterCard: React.FC<IFilterCardProps> = ({
    text,
    handlerClick,
    isSelected = false,
}) => {
    return (
        <button
            type={'button'}
            className={classNames(styles.card, {
                [styles['is-active']]: isSelected,
            })}
            onClick={handlerClick}
            onKeyDown={handlerClick}
        >
            {text}
        </button>
    )
}
