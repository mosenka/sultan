import { Params } from '@remix-run/router'
import classNames from 'classnames'
import { useEffect } from 'react'
import * as React from 'react'

import { ButtonArrow, Container, DotsSeparator, Text } from '@/ui'
import styles from 'components/layout/navigation/Breadcrumbs/breadcrumbs.scss'
import { Link, useLocation, useMatches, useParams } from 'react-router-dom'

interface IMatch {
    id: string
    pathname: string
    params: Params<string>
    data: unknown
    test: Array<string>
    handle: {
        crumb: () => JSX.Element
    }
}

export const Breadcrumbs: React.FC = () => {
    let matches = useMatches() as IMatch[]
    let location = useLocation()

    const crumbs = matches
        .filter((match): boolean => Boolean(match?.handle?.crumb))
        .map(match => match.handle.crumb())

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
                {location?.pathname != '/' && (
                    <Link to={'..'} className={styles.mobNav}>
                        <ButtonArrow />
                        <span className={styles.backText}>Назад</span>
                    </Link>
                )}
            </Container>
        </>
    )
}
