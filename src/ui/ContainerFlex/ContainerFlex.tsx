import * as React from 'react'

import styles from './containerflex.scss'

interface IContainerFlexProps {
    children?: React.ReactNode
}

export const ContainerFlex: React.FC<IContainerFlexProps> = ({ children }) => {
    return <div className={styles.container}>{children}</div>
}
