import React from 'react'

import styles from './loadingspinner.scss'

export function LoadingSpinner(): React.ReactElement {
    return (
        <div className={styles.wrapper}>
            <div className={styles.spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p className={styles.text}>загрузка...</p>
        </div>
    )
}
