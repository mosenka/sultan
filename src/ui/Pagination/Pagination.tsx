import classNames from 'classnames'
import * as React from 'react'

import styles from './pagination.scss'

import { EIcons, Icon } from '@/ui'

interface IPaginationProps {
    perPage: number
    totalCount: number
    currentPage: number
    paginate: (num: number) => void
    nextPage?: () => void
    previousPage?: () => void
}

export const Pagination: React.FC<IPaginationProps> = ({
    perPage = 6,
    totalCount = 18,
    currentPage = 1,
    paginate,
    nextPage,
    previousPage,
}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCount / perPage); i++) {
        pageNumbers.push(
            <span
                key={i}
                className={classNames(styles.item, {
                    [styles['is-active']]: i === currentPage,
                })}
                onClick={() => paginate(i)}
            >
                {i}
            </span>
        )
    }

    return (
        <div className={styles.wrapper}>
            <span
                className={classNames(styles.arrow, styles.prev)}
                onClick={previousPage}
            >
                <Icon icon={EIcons.arrow} width={9} />
            </span>

            {/* <span className={classNames(styles.item, styles['is-active'])}> */}
            {/*    2 */}
            {/* </span> */}
            {pageNumbers}
            <span
                className={classNames(styles.arrow, styles.next)}
                onClick={nextPage}
            >
                <Icon icon={EIcons.arrow} width={9} />
            </span>
        </div>
    )
}
