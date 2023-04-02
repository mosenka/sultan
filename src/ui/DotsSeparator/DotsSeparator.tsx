import classNames from 'classnames'
import * as React from 'react'

import styles from './dotsseparator.scss'

type TSize = 0 | 10 | 20 | 25 | 30 | null

interface IDotsSeparatorProps {
    height?: number
    size?: TSize
    isHorizontal?: boolean
    laptopSize?: TSize
    tabletSize?: TSize
    mobileSize?: TSize
}

export const DotsSeparator: React.FC<IDotsSeparatorProps> = ({
    height = 40,
    size = 20,
    isHorizontal = false,
    laptopSize = null,
    mobileSize = 0,
    tabletSize = 0,
}) => {
    if (isHorizontal) {
        height = 1
        size = 0
    }
    const calsses = classNames(
        styles.wrapper,
        styles[`s${size}`],
        { [styles.horizontal]: isHorizontal },
        { [styles[`l${laptopSize}`]]: laptopSize },
        { [styles[`t${tabletSize}`]]: tabletSize },
        { [styles[`m${mobileSize}`]]: mobileSize }
    )

    return (
        <div className={calsses}>
            <span
                className={styles.separator}
                style={{ height: `${height}px` }}
            ></span>
        </div>
    )
}
