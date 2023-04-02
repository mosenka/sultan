import * as React from 'react'

import styles from './header.scss'

interface IHeaderProps {
    children?: React.ReactNode
}

export const Header: React.FC<IHeaderProps> = ({ children }) => {
    return <header className={styles.header}>{children}</header>
}
