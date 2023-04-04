/*  */
import classNames from 'classnames'
import * as React from 'react'

import styles from './buttonarrow.scss'

import { EIcons, Icon } from '@/ui'

interface IButtonArrowProps {
    isOpen?: boolean
}

export const ButtonArrow: React.FC<IButtonArrowProps> = ({
    isOpen = false,
}) => {
    return (
        <div
            className={classNames(styles.button, {
                [styles['is-open']]: isOpen,
            })}
        >
            <Icon icon={EIcons.arrow} width={8} />
        </div>
    )
}
