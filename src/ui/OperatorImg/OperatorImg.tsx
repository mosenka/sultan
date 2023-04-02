import * as React from 'react'

import img from './img/operator.png'
import styles from './operatorimg.scss'

interface IOperatorImgProps {
    isOnline?: boolean
}

export const OperatorImg: React.FC<IOperatorImgProps> = ({
    isOnline = true,
}) => {
    return (
        <div className={styles.wrapper}>
            <img src={img} alt="оператор" width={74} />
            {isOnline && <span className={styles.indicator}></span>}
        </div>
    )
}
