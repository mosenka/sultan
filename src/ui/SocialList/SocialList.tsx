import classNames from 'classnames'
import * as React from 'react'

import { EIcons, Icon } from '@/ui'
import styles from 'ui/SocialList/sociallist.scss'

export const SocialList: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <a
                href="#whatsapp"
                className={classNames(styles.item, styles.whatsapp)}
            >
                <Icon icon={EIcons.whatsapp} width={23} />
            </a>
            <a
                href="#telegram"
                className={classNames(styles.item, styles.telegram)}
            >
                <Icon icon={EIcons.telegram} width={22} />
            </a>
        </div>
    )
}
