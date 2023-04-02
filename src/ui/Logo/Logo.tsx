import React from 'react'

import styles from './logo.scss'

import { EColor, EIcons, Icon } from '@/ui'

interface ILogoProps {
    isLighten?: boolean
}

export const Logo: React.FC<ILogoProps> = ({ isLighten = false }) => {
    return (
        <a href="/" className={styles.wrapper}>
            <Icon
                icon={EIcons.logo}
                fill={isLighten ? EColor.white : EColor.fiord}
                width={'100%'}
            />
        </a>
    )
}
