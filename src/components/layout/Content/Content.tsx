import * as React from 'react'

import styles from './content.scss'

interface IContentProps {
    children?: React.ReactNode
}

export const Content: React.FC<IContentProps> = ({ children }) => {
    return <div className={styles.content}>{children}</div>
}
