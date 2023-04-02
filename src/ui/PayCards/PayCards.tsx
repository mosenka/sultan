import * as React from 'react'

import mastercard from './img/mastercard.png'
import Visa from './img/Visa.png'
import styles from './PayCards.scss'

export const PayCards: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <a href="#pay" className={styles.item}>
                <img src={Visa} alt="visa" className={styles.img} />
            </a>
            <a href="#pay" className={styles.item}>
                <img src={mastercard} alt="mastercard" className={styles.img} />
            </a>
        </div>
    )
}
