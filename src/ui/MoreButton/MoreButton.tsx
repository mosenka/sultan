import classNames from 'classnames'
import { useState } from 'react'
import * as React from 'react'

import styles from './morebutton.scss'

import { Text, Icon, EIcons, Break } from '@/ui'

interface IMoreButtonProps {
    text?: string
    handlerClick?: () => void
}

export const MoreButton: React.FC<IMoreButtonProps> = ({
    text = 'Показать все',
    handlerClick,
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handlerOpen = (): void => {
        setIsOpen(!isOpen)

        if (handlerClick == null) return
        handlerClick()
    }

    return (
        <p className={styles.wrapper} onClick={handlerOpen}>
            <Text>{isOpen ? 'Скрыть' : text}</Text>
            <Break size={4} />
            <span
                className={classNames(styles.icon, {
                    [styles['is-open']]: isOpen,
                })}
            >
                <Icon icon={EIcons.arrowFull} width={7} />
            </span>
        </p>
    )
}
