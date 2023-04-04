import * as React from 'react'

import styles from './navbar.scss'

import {
    Break,
    BurgerButton,
    Button,
    Container,
    DotsSeparator,
    EColor,
    EIcons,
    Icon,
    Logo,
    RequestCall,
    SearchInput,
    Text,
} from '@/ui'
import { CartIconContainer } from '@modules/cart/CartIconContainer/CartIconContainer'

interface INavbarProps {
    children?: React.ReactNode
}

export const Navbar: React.FC<INavbarProps> = ({ children }) => {
    return (
        <div className={styles.navbar}>
            <Container>
                <div className={styles.wrapper}>
                    <BurgerButton />
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <Break size={38} desktopSize={30} mobileSize={'0'} />
                    <div className={styles.catalog}>
                        <Button>
                            <span className={styles.catalog}>Каталог</span>
                            <Break size={12} />
                            <Icon
                                icon={EIcons.rectangles}
                                width={20}
                                stroke={EColor.white}
                            />
                        </Button>
                    </div>
                    <Break size={15} desktopSize={'0'} />
                    <div className={styles.search}>
                        <SearchInput value={''} changeHandler={() => {}} />
                    </div>
                    <div className={styles.inner}>
                        <Break size={38} desktopSize={30} />
                        <div className={styles.call}>
                            <RequestCall />
                        </div>
                        <DotsSeparator height={50} size={25} laptopSize={10} />
                        <Button>
                            <Text size={14} weight={700} color={EColor.white}>
                                Прайс-лист
                            </Text>
                            <Break size={12} />
                            <Icon
                                icon={EIcons.download}
                                width={11}
                                fill={EColor.white}
                            />
                        </Button>
                        <DotsSeparator height={50} size={25} laptopSize={10} />
                    </div>
                    <CartIconContainer />
                </div>
            </Container>
            {children}
        </div>
    )
}
