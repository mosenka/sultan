import * as React from 'react'

import styles from './sizecard.scss'

import { EColor, EIcons, Icon, Text } from '@/ui'
import { TSizeType } from '@models/IProduct'

interface ISizeCardProps {
    sizeType: TSizeType
    sizeValue: string
}

export const SizeCard: React.FC<ISizeCardProps> = ({ sizeType, sizeValue }) => {
    return (
        <div className={styles.sizeWrapper}>
            <span className={styles.icon}>
                {sizeType === 'volume' && (
                    <Icon icon={EIcons.bottle} width={10} fill={EColor.fiord} />
                )}
                {sizeType === 'weight' && (
                    <Icon icon={EIcons.box} width={10} fill={EColor.fiord} />
                )}
            </span>
            <p className={styles.value}>
                <Text size={12} color={EColor.fiord}>
                    {sizeValue}
                </Text>
            </p>
        </div>
    )
}
