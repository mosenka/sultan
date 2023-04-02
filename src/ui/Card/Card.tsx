import * as React from 'react'

import styles from './card.scss'

interface ICardProps {
    children?: React.ReactNode
}

export const Card: React.FC<ICardProps> = ({ children }) => {
    return <div className={styles.card}>{children}</div>
}
