import * as React from 'react'

import { EIcons, Icon } from '@/ui'
import styles from 'ui/BurgerButton/burgerbutton.scss'

export const BurgerButton: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Icon icon={EIcons.burger} width={12} />
        </div>
    )
}
