import classNames from 'classnames'
import React from 'react'

import styles from './button.scss'

type TSize = 'small' | 'big' | 'circle'

interface IButtonProps {
    size?: TSize
    children?: React.ReactNode
    handlerClick?: () => void
}

export const Button: React.FC<IButtonProps> = ({
    children,
    size = 'big',
    handlerClick,
}) => {
    const classes = classNames(styles.wrapper, styles[size])
    /* const classes = classNames(
         styles[`s${size}`],
         styles[color],
         { [styles[`w${weight}`]]: weight },
         { [styles[`m${mobileSize}`]]: mobileSize },
         { [styles[`t${tabletSize}`]]: tabletSize },
         { [styles[`d${desktopSize}`]]: desktopSize }
     ) */

    return (
        <button className={classes} onClick={handlerClick}>
            {children}
        </button>
    )
}
