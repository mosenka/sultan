import classNames from 'classnames'
import React from 'react'

import styles from './text.scss'

import { EColor } from '@ui/assets/EColors'

type TSizes = 10 | 12 | 14 | 16 | 24 | 30 | 0

type TWeight = 200 | 300 | 400 | 500 | 600 | 700 | 800

interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div'
    children?: React.ReactNode
    size?: TSizes
    weight?: TWeight
    mobileSize?: TSizes
    tabletSize?: TSizes
    desktopSize?: TSizes
    color?: EColor
    underline?: boolean
    uppercase?: boolean
    letterSpacing?: string | number
}

export function Text(props: ITextProps): JSX.Element {
    const {
        As = 'span',
        children,
        size = 14,
        mobileSize = size,
        tabletSize = size,
        desktopSize = size,
        color = EColor.black,
        weight = 400,
        underline = false,
        uppercase = false,
        letterSpacing = 1,
    } = props

    const classes = classNames(
        { [styles[`s${size}`]]: size },
        styles[color],
        { [styles[`w${weight}`]]: weight },
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`t${tabletSize}`]]: tabletSize },
        { [styles[`d${desktopSize}`]]: desktopSize },
        { [styles.underline]: underline },
        { [styles.uppercase]: uppercase }
    )

    return (
        <As className={classes} style={{ letterSpacing: `${letterSpacing}` }}>
            {children}
        </As>
    )
}
