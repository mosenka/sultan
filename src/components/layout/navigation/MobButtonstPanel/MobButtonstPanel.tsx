import { Break, DotsSeparator, EColor, EIcons, Icon, Text } from '@/ui'
import * as React from 'react'
import styles from './mobbuttonstpanel.scss'

interface IMobButtonstPanelProps {}

export const MobButtonstPanel: React.FC<IMobButtonstPanelProps> = ({}) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.item}>
                <Text size={16} weight={600} color={EColor.fiord}>
                    Каталог
                </Text>
                <Break size={6} />
                <Icon
                    icon={EIcons.rectangles}
                    width={15}
                    stroke={EColor.fiord}
                />
            </p>
            <DotsSeparator size={20} height={30} />
            <p className={styles.item}>
                <Text size={16} weight={600} color={EColor.fiord}>
                    Поиск
                </Text>
                <Break size={6} />
                <Icon icon={EIcons.glass} width={15} stroke={EColor.fiord} />
            </p>
        </div>
    )
}
