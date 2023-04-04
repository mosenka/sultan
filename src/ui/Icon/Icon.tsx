import classNames from 'classnames'
import React from 'react'

import styles from './icon.scss'
import { IIconProps } from './icon.types'

import { iconsList } from './iconsList'

export function Icon({
    icon,
    height = '100%',
    width,
    stroke = 'none',
    fill = 'none',
}: IIconProps): JSX.Element {
    const [symbol] = iconsList.filter(elem => elem.name === icon)

    const classes = classNames(
        styles.icon,
        { [styles[`fill_${fill}`]]: fill },
        { [styles[`stroke_${stroke}`]]: stroke }
    )

    return (
        <svg
            viewBox={symbol.symbol.viewBox}
            height={height}
            width={width}
            className={classes}
        >
            <use xlinkHref={`#${symbol.symbol.id}`} />
        </svg>
    )
}
