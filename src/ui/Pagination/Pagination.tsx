import classNames from 'classnames'
import * as React from 'react'

import styles from './pagination.scss'

import { EColor, EIcons, Icon } from '@/ui'

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
            <button
                type="button"
                key={i}
                className={classNames(styles.item, {
                    [styles['is-active']]: i === currentPage,
                })}
                onClick={() => paginate(i)}
                onKeyDown={() => paginate(i)}
            >
                {i}
            </button>
        )
    }

    return (
        <div className={styles.wrapper}>
            <button
                type={'button'}
                className={classNames(styles.arrow, styles.prev)}
                onClick={previousPage}
                onKeyDown={previousPage}
            >
                <Icon icon={EIcons.arrow} width={9} fill={EColor.gold} />
            </button>

            {pageNumbers}
            <button
                type={'button'}
                className={classNames(styles.arrow, styles.next)}
                onClick={nextPage}
                onKeyDown={nextPage}
            >
                <Icon icon={EIcons.arrow} width={9} fill={EColor.gold} />
            </button>
        </div>
    )
}
