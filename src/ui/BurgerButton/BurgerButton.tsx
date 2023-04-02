import * as React from 'react'
import styles from 'ui/BurgerButton/burgerbutton.scss'

import { EIcons, Icon } from '@/ui'

interface IBurgerButtonProps {}

export const BurgerButton: React.FC<IBurgerButtonProps> = ({}) => {
    return (
        <div className={styles.wrapper}>
            <Icon icon={EIcons.burger} width={12} />
        </div>
    )
}
