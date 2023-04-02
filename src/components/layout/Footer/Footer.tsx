import classNames from 'classnames'
import * as React from 'react'

import styles from './footer.scss'

import {
    Break,
    Button,
    Container,
    EColor,
    EIcons,
    Icon,
    Logo,
    PayCards,
    SocialList,
    SubscriptionForm,
    Text,
} from '@/ui'

export const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.column}>
                        <Logo isLighten />
                        <p className={styles.desc}>
                            <Text size={16} color={EColor.white}>
                                Компания &quot;Султан&quot; — снабжаем розничные
                                магазины товарами &quot;под ключ&quot; в
                                Кокчетаве и Акмолинской области
                            </Text>
                        </p>
                        <div className={styles.form}>
                            <p className={styles.descSubtitle}>
                                <Text size={12} color={EColor.white}>
                                    Подпишись на скидки и акции
                                </Text>
                            </p>
                            <SubscriptionForm
                                value={''}
                                changeHandler={(event: Event) => {}}
                            />
                        </div>
                        <div className={styles.mobPriceButton}>
                            <Button size={'small'}>
                                <Text
                                    size={14}
                                    weight={700}
                                    color={EColor.white}
                                >
                                    Прайс-лист
                                </Text>
                                <Break size={12} />
                                <Icon
                                    icon={EIcons.download}
                                    width={11}
                                    fill={EColor.white}
                                />
                            </Button>
                        </div>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.column}>
                            <h3 className={styles.subtitle}>Меню сайта:</h3>
                            <a className={styles.link} href="/">
                                О компании
                            </a>
                            <a className={styles.link} href="/">
                                Доставка
                            </a>
                            <a className={styles.link} href="/">
                                Возврат
                            </a>
                            <a className={styles.link} href="/">
                                Контакты
                            </a>
                        </div>
                        <div className={styles.column}>
                            <h3 className={styles.subtitle}>Категории:</h3>
                            <a className={styles.link} href="/">
                                Бытовая химия
                            </a>
                            <a className={styles.link} href="/">
                                Косметика и гигиена
                            </a>
                            <a className={styles.link} href="/">
                                Товары для дома
                            </a>
                            <a className={styles.link} href="/">
                                Товары для детей и мам
                            </a>
                            <a className={styles.link} href="/">
                                Посуда
                            </a>
                        </div>
                    </div>
                    <div
                        className={classNames(styles.column, styles.priceList)}
                    >
                        <h3 className={styles.subtitle}>Скачать прайс-лист:</h3>
                        <div className={styles.buttonWrapper}>
                            <Button>
                                <Text
                                    size={14}
                                    weight={700}
                                    color={EColor.white}
                                >
                                    Прайс-лист
                                </Text>
                                <Break size={12} />
                                <Icon
                                    icon={EIcons.download}
                                    width={11}
                                    fill={EColor.white}
                                />
                            </Button>
                        </div>
                        <p className={styles.descSubtitle}>
                            Связь в мессенджерах:
                        </p>
                        <SocialList />
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.subtitle}>Контакты:</h3>
                        <div className={styles.contactsItem}>
                            <a href="tel:" className={styles.phone}>
                                <Text weight={600} color={EColor.white}>
                                    +7 (777) 490-00-91
                                </Text>
                            </a>
                            <Break size={4} top />
                            <Text weight={300} size={12} color={EColor.white}>
                                время работы: 9:00-20:00
                            </Text>
                            <Break size={4} top />
                            <a href="tel:" className={styles.calls}>
                                <Text
                                    weight={400}
                                    size={10}
                                    color={EColor.white}
                                    underline
                                >
                                    Заказать звонок
                                </Text>
                            </a>
                        </div>
                        <div className={styles.contactsItem}>
                            <a
                                href="mailto: opt.sultan@mail.ru"
                                className={styles.phone}
                            >
                                <Text weight={600} color={EColor.white}>
                                    opt.sultan@mail.ru
                                </Text>
                            </a>
                            <Text weight={300} size={12} color={EColor.white}>
                                На связи в любое время
                            </Text>
                        </div>
                        <PayCards />
                    </div>
                    <div className={styles.mobSocial}>
                        <p className={styles.descSubtitle}>
                            Связь в мессенджерах:
                        </p>
                        <SocialList />
                    </div>
                </div>
            </Container>
        </div>
    )
}
