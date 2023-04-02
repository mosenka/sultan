import * as React from 'react'

import { OperatorImg, EColor, Text } from '@/ui'
import styles from 'ui/RequestCall/requestcall.scss'

export const RequestCall: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <a href="tel:+77774900091">
                    <Text size={14} weight={600} color={EColor.grey11}>
                        +7 (777) 490-00-91
                    </Text>
                </a>
                <br />
                <Text size={12} weight={300} color={EColor.grey11}>
                    время работы: 9:00-20:00
                </Text>
                <br />
                <a href="/">
                    <Text
                        size={12}
                        weight={400}
                        color={EColor.grey11}
                        underline
                    >
                        Заказать звонок
                    </Text>
                </a>
            </div>
            <div className={styles.img}>
                <OperatorImg />
            </div>
        </div>
    )
}
