import * as React from 'react'

import styles from 'components/layout/navigation/TopLine/topline.scss'

import { Menu } from '../Menu/Menu'

import {
    AddressCards,
    Container,
    DotsSeparator,
    EColor,
    EIcons,
    Icon,
} from '@/ui'

export const TopLine: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.address}>
                        <AddressCards
                            text={'г. Кокчетав, ул. Ж. Ташенова 129Б'}
                            desc={'(Рынок Восточный)'}
                            href={'#address'}
                        >
                            <Icon
                                icon={EIcons.loc}
                                width={13}
                                stroke={EColor.fiord}
                            />
                        </AddressCards>
                        <DotsSeparator height={40} size={20} />
                        <AddressCards
                            text={'opt.sultan@mail.ru'}
                            desc={'На связи в любое время'}
                            href={'mailto:opt.sultan@mail.ru'}
                        >
                            <Icon
                                icon={EIcons.mail}
                                width={13}
                                stroke={EColor.fiord}
                            />
                        </AddressCards>
                    </div>
                    <Menu />
                </div>
            </Container>
        </div>
    )
}
