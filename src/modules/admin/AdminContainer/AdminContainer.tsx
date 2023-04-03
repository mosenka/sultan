import { fetchCategories, fetchProductsList } from '@/api'
import { AdminTableRow, Popup } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { IProduct } from '@/models'
import { edit } from '@assets/icons'
import { AdminForm } from '@modules/admin'
import { getCategoryNameById } from '@modules/admin/AdminContainer/helper'
import {
    addNewProduct,
    deleteProduct,
    editProduct,
} from '@store/productsList/ProductsListSlice'
import { useEffect, useState } from 'react'
import * as React from 'react'
import styles from './admincontainer.scss'

import { Container, ErrorMessage, LoadingSpinner, Title } from '@/ui'

interface IAdminContainerProps {}

export const AdminContainer: React.FC<IAdminContainerProps> = ({}) => {
    const { error, isLoading, productsList } = useAppSelector(
        state => state.productsListReducer
    )
    const { categories } = useAppSelector(state => state.categoriesReducer)

    const [isEdit, setIsEdit] = useState(true)
    const [initEditProduct, setInitEditProduct] = useState<IProduct>()

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (productsList.length > 0) return
        dispatch(fetchProductsList())
        dispatch(fetchCategories())
    }, [productsList])

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error.length > 0) {
        return <ErrorMessage text={error} />
    }

    if (productsList.length === 0) {
        return <p>список пустой</p>
    }

    const handlerDelete = (id: string) => {
        dispatch(deleteProduct(id))
    }

    const handlerEdit = (product: IProduct) => {
        if (!product) return
        setInitEditProduct(product)
        setIsEdit(true)
    }

    const list = productsList?.map(product => {
        return (
            <AdminTableRow
                key={product.id}
                product={product}
                deleteItem={handlerDelete}
                editItem={handlerEdit}
                categories={getCategoryNameById(
                    product.categoriesId,
                    categories
                )}
            />
        )
    })

    const onSaveNewProduct = (product: IProduct) => {
        dispatch(addNewProduct(product))
    }

    const seveEditProduct = (product: IProduct) => {
        dispatch(editProduct(product))
        setIsEdit(false)
    }

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
                <AdminForm
                    title={'Добавить новый продукт'}
                    name={''}
                    price={0}
                    desc={''}
                    sizeType={'weight'}
                    sizeValue={''}
                    brand={''}
                    makersId={''}
                    onSave={onSaveNewProduct}
                    categoriesId={[]}
                />
            </Container>
            {isEdit && initEditProduct && (
                <Popup isOpen={isEdit} closePopup={() => setIsEdit(false)}>
                    <div className={styles.editWrapper}>
                        <AdminForm
                            id={initEditProduct.id}
                            title={'Редактировать продукт'}
                            onSave={seveEditProduct}
                            name={initEditProduct.name}
                            price={initEditProduct.price}
                            desc={initEditProduct.desc}
                            sizeType={initEditProduct.sizeType}
                            sizeValue={initEditProduct.sizeValue}
                            brand={initEditProduct.brand}
                            makersId={initEditProduct.makersId}
                            categoriesId={initEditProduct.categoriesId}
                            img={initEditProduct.img}
                        />
                    </div>
                </Popup>
            )}
        </div>
    )
}
