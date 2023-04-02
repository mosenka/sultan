import * as React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import styles from './Menu.scss'

import { DotsSeparator, EColor, Text } from '@/ui'

const MENULIST = [
    { name: 'Админка', link: '/admin' },
    { name: 'Доставка и оплата', link: '/about' },
    { name: 'Возврат', link: '/return' },
    { name: 'Контакты', link: '/contacts' },
]

export const Menu: React.FC = ({}) => {
    const menuList = MENULIST.map((item, index) => {
        const id = uuidv4()
        const isLastChild = MENULIST.length - 1 === index

        return (
            <React.Fragment key={id}>
                <Link to={item.link} key={id}>
                    <Text color={EColor.fiord} desktopSize={12}>
                        {item.name}
                    </Text>
                </Link>
                {!isLastChild && (
                    <DotsSeparator height={30} size={30} laptopSize={20} />
                )}
            </React.Fragment>
        )
    })

    return <div className={styles.wrapper}>{menuList}</div>
}
