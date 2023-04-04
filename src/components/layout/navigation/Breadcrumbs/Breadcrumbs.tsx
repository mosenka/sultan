import { Params } from '@remix-run/router'
import classNames from 'classnames'
import * as React from 'react'

import { Link, useMatches } from 'react-router-dom'

import { ButtonArrow, Container, DotsSeparator, Text } from '@/ui'
import styles from 'components/layout/navigation/Breadcrumbs/breadcrumbs.scss'

interface IMatch {
    id: string
    pathname: string
    params: Params<string>
    data?: string
    handle: {
        crumb: (data: string | undefined) => JSX.Element
    }
}

export const Breadcrumbs: React.FC = () => {
    const matches = useMatches() as IMatch[]

    const crumbs = matches
        .filter((match): boolean => Boolean(match?.handle?.crumb))
        .map(match => match.handle.crumb(match.data))

    const list = crumbs.map((item, index) => {
        return (
            <React.Fragment key={index}>
                <DotsSeparator size={10} height={10} />
                <Text size={14} weight={300}>
                    {item}
                </Text>
            </React.Fragment>
        )
    })

    return (
        <>
            <Container>
                <div className={styles.wrapper}>
                    <Link
                        to="/"
                        className={classNames(styles.item, styles.main)}
                    >
                        <Text size={14} weight={300}>
                            Главная
                        </Text>
                    </Link>
                    {list}
                </div>
                {location?.pathname !== '/' && (
                    <Link to={'..'} className={styles.mobNav}>
                        <ButtonArrow />
                        <span className={styles.backText}>Назад</span>
                    </Link>
                )}
            </Container>
        </>
    )
}
