import React, { useState } from 'react'

import { Sidebar } from '@/components'
import {
    ProductsList,
    MakerAndPriceFilter,
    TypesFilter,
    SortingSelect,
} from '@/modules'
import { ButtonArrow, Container, ContainerFlex, Title } from '@/ui'
import { FilterCategoryCards } from '@modules/filters'
import styles from './catalogpage.scss'

export const CatalogPage: React.FC = () => {
    const [isOpenFilters, setIsOpenFilters] = useState(false)

    return (
        <ContainerFlex>
            <Container>
                <Title text={'Косметика и гигиена'} />
                <div className={styles.dropdownTop}>
                    <SortingSelect />
                </div>
            </Container>
            <Container>
                <FilterCategoryCards />
            </Container>
            <Sidebar title={''}>
                <div className={styles.desktopTitle}>
                    <h3 className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
                </div>
                <div
                    className={styles.tabletTitle}
                    onClick={() => setIsOpenFilters(!isOpenFilters)}
                >
                    <h3 className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
                    <ButtonArrow isOpen={isOpenFilters} />
                </div>
                {isOpenFilters && <MakerAndPriceFilter />}
                <div className={styles.desktopFilters}>
                    <MakerAndPriceFilter />
                </div>
                <TypesFilter />
                <div className={styles.dropdownBottom}>
                    <SortingSelect />
                </div>
            </Sidebar>
            <ProductsList />
        </ContainerFlex>
    )
}
