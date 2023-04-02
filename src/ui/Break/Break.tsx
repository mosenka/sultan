import classNames from 'classnames'
import React from 'react'

import styles from 'ui/Break/break.scss'

type TBreakSize = '0' | 4 | 6 | 8 | 10 | 12 | 15 | 20 | 30 | 38 | null

// type TDisplays = 'mobile' | 'tablet' | 'desktop'

interface IBreakProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div'
    size: TBreakSize
    mobileSize?: TBreakSize
    tabletSize?: TBreakSize
    desktopSize?: TBreakSize
    inline?: boolean
    top?: boolean
}

export function Break(props: IBreakProps): JSX.Element {
    const {
        As = 'span',
        inline = false,
        top = false,
        size,
        mobileSize = null,
        tabletSize = null,
        desktopSize = null,
    } = props
    const classes = classNames(
        styles[`s${size}`],
        { [styles[`desktop_s${desktopSize}`]]: desktopSize },
        { [styles[`tablet_s${tabletSize}`]]: tabletSize },
        { [styles[`mobile_s${mobileSize}`]]: mobileSize },
        { [styles.top]: top },
        { [styles.inline]: inline }
    )
    return <As className={classes} />
}
