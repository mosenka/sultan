import * as React from 'react'

import styles from './characteristicsitem.scss'

import { EColor, Text } from '@/ui'

interface IСharacteristicsItemProps {
    name: string
    value: string | number
}

export const СharacteristicsItem: React.FC<IСharacteristicsItemProps> = ({
    name,
    value,
}) => {
    return (
        <p className={styles.wrapper}>
            <Text weight={300} color={EColor.fiord}>
                {name}
            </Text>
            {` : `}
            <Text weight={500} color={EColor.grey11}>
                {value}
            </Text>
        </p>
    )
}
