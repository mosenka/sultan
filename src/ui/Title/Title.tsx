import * as React from 'react'

import styles from './Title.scss'

interface ITitleProps {
    text: string
}

export const Title: React.FC<ITitleProps> = ({ text }) => {
    return <h1 className={styles.title}>{text}</h1>
}
