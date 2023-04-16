import classNames from 'classnames'
import * as React from 'react'

import styles from './inputprice.scss'

interface IInputPriseProps {
    value: number
    handlerChange: (event: React.FormEvent<HTMLInputElement>) => void
    handlerBlur?: () => void
    isError?: boolean
}

export const InputPrice: React.FC<IInputPriseProps> = ({
    value,
    handlerChange,
    isError = false,
    handlerBlur,
}) => {
    return (
        <input
            className={classNames(styles.input, {
                [styles['is-error']]: isError,
            })}
            type="text"
            value={value}
            onChange={handlerChange}
            onBlur={handlerBlur}
        />
    )
}
