import * as React from 'react'

import styles from './AddressCards.scss'

import { Text } from '@/ui'

interface IAddressCardsProps {
    children?: React.ReactNode
    text: string
    desc?: string
    href: string
}

export const AddressCards: React.FC<IAddressCardsProps> = ({
    children,
    text,
    desc = '',
    href: string,
}) => {
    return (
        <a href="#address" className={styles.wrapper}>
            <span className={styles.icon}>{children}</span>
            <span className={styles.text}>
                <Text size={14} weight={600} desktopSize={12}>
                    {text}
                </Text>
                {desc.length > 0 && (
                    <Text size={12} weight={300} desktopSize={10}>
                        {desc}
                    </Text>
                )}
            </span>
        </a>
    )
}
