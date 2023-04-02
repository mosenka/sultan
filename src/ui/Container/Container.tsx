import React from 'react'

import styles from './container.scss'

interface IContainerProps {
    children?: React.ReactNode
    attrs?: any
}

export const Container: React.FC<IContainerProps> = ({ children }) => {
    return <div className={styles.container}>{children}</div>
}
