import * as React from 'react'

import styles from './sidebar.scss'

interface ISidebarProps {
    title: string
    children?: React.ReactNode
}

export const Sidebar: React.FC<ISidebarProps> = ({ children, title }) => {
    return (
        <div className={styles.sidebar}>
            {/* <h3 className={styles.title}>{title}</h3> */}
            {children}
        </div>
    )
}
