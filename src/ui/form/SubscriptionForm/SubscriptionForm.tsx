import * as React from 'react'

import { EColor, EIcons, Icon } from '@/ui'
import styles from '@ui/form/SubscriptionForm/subscriptionform.scss'

interface ISubscriptionFormProps {
    value: string
    changeHandler: (event: Event) => void
}

export const SubscriptionForm: React.FC<ISubscriptionFormProps> = ({
    value,
    changeHandler,
}) => {
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type="text"
                placeholder={'Введите ваш E-mail...'}
            />
            <button className={styles.button}>
                <Icon icon={EIcons.arrow} width={8} fill={EColor.white} />
            </button>
        </div>
    )
}
