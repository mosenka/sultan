import { fetchCategories, fetchProductsList } from '@/api'
import { AdminTableRow } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { AddForm } from '@modules/admin'
import { getCategoryNameById } from '@modules/admin/AdminContainer/helper'
import { useEffect } from 'react'
import * as React from 'react'
import styles from './admincontainer.scss'

import { Container, ErrorMessage, LoadingSpinner, Title } from '@/ui'

interface IAdminContainerProps {}

export const AdminContainer: React.FC<IAdminContainerProps> = ({}) => {
    const { error, isLoading, productsList } = useAppSelector(
        state => state.productsListReducer
    )
    const { categories } = useAppSelector(state => state.categoriesReducer)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProductsList())
        dispatch(fetchCategories())
    }, [])

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error.length > 0) {
        return <ErrorMessage text={error} />
    }

    if (productsList.length === 0) {
        return <p>список пустой</p>
    }

    const list = productsList?.map(product => {
        return (
            <AdminTableRow
                key={product.id}
                product={product}
                deleteItem={() => {}}
                editItem={() => {}}
                categories={getCategoryNameById(
                    product.categoriesId,
                    categories
                )}
            />
        )
    })

    return (
        <div>
            <Container>
                <Title text={'Панель администратора'} />
                <div className={styles.wrapper}>
                    <table className={styles.table}>
                        <caption className={styles.caption}>
                            Список товаров
                        </caption>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Картинка</th>
                                <th>название</th>
                                <th>цена</th>
                                <th>размер</th>
                                <th>производитель</th>
                                <th>бренд</th>
                                <th>категории</th>
                                <th>описание</th>
                                <th>удалить</th>
                                <th>редактировать</th>
                            </tr>
                        </thead>
                        <tbody>{list}</tbody>
                    </table>
                </div>
            </Container>
            <Container>
                <AddForm />
            </Container>
        </div>
    )
}
