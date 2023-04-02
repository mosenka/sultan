import * as React from 'react'

import styles from './errormessage.scss'

interface IErrorMessageProps {
    text: string
}

export const ErrorMessage: React.FC<IErrorMessageProps> = ({ text }) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.icon}>!</span>
            <span className={styles.text}>{text}</span>
        </div>
    )
}
