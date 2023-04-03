import { fetchMakers } from '@/api'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { Text } from '@/ui'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AdminFormInput } from '@/components'
import { IProduct, TSizeType } from '@models/IProduct'
import { CategogiesFormGroup } from '@modules/admin/CategogiesFormGroup/CategogiesFormGroup'
import { SelectMakers } from '@modules/admin/SelectMakers/SelectMakers'
import { SelectSizeType } from '@modules/admin/SelectSizeType/SelectSizeType'
import { validate } from './validate'

import { useFormik } from 'formik'

import * as React from 'react'
import styles from '@modules/admin/AdminForm/adminform.scss'

export interface IAddProductFormValues {
    name: string
    price: number
    desc: string
    sizeType: TSizeType
    sizeValue: string
    brand: string
    makersId: string
    categoriesId: string[]
}

interface IAdminFormProps extends IAddProductFormValues {
    id?: string
    onSave: (newProduct: IProduct) => void
    title: string
    img?: string
}

export const AdminForm: React.FC<IAdminFormProps> = ({
    id = null,
    name,
    price,
    sizeValue,
    brand,
    desc,
    makersId,
    sizeType,
    categoriesId,
    onSave,
    title,
    img = null,
}) => {
    const { makersList } = useAppSelector(state => state.makersReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (makersList.length != 0) return

        dispatch(fetchMakers())
    }, [])

    const formik = useFormik({
        initialValues: {
            name: name,
            price: price,
            desc: desc,
            sizeType: sizeType,
            sizeValue: sizeValue,
            brand: brand,
            makersId: makersId,
            categoriesId: [...categoriesId],
        },
        validate,
        onSubmit: values => {
            const newImg = img ? img : 'img3.png'
            const newId = id ? id : uuidv4()

            if (makersList) {
                const maker = makersList.find(
                    item => item.id === values.makersId
                )
                if (maker) {
                    onSave({
                        ...values,
                        img: newImg,
                        id: newId,
                        makers: maker,
                    })
                    formik.resetForm()
                }
            }
        },
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Text size={24} weight={600}>
                    {title}
                </Text>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <AdminFormInput
                    name={'name'}
                    title={'название'}
                    isError={Boolean(formik.touched.name && formik.errors.name)}
                    handleChange={formik.handleChange}
                    value={formik.values.name}
                    errorText={formik.errors.name}
                />
                <AdminFormInput
                    name={'price'}
                    title={'цена'}
                    isError={Boolean(
                        formik.touched.price && formik.errors.price
                    )}
                    handleChange={formik.handleChange}
                    value={+formik.values.price}
                    errorText={formik.errors.price}
                />
                <AdminFormInput
                    name={'brand'}
                    title={'бренд'}
                    isError={Boolean(
                        formik.touched.brand && formik.errors.brand
                    )}
                    handleChange={formik.handleChange}
                    value={formik.values.brand}
                    errorText={formik.errors.brand}
                />
                <SelectSizeType
                    name={'sizeType'}
                    value={formik.values.sizeType}
                    handleChange={formik.handleChange}
                />
                <AdminFormInput
                    name={'sizeValue'}
                    title={'размер'}
                    isError={Boolean(
                        formik.touched.sizeValue && formik.errors.sizeValue
                    )}
                    handleChange={formik.handleChange}
                    value={formik.values.sizeValue}
                    errorText={formik.errors.sizeValue}
                />
                <AdminFormInput
                    name={'desc'}
                    title={'Описание'}
                    isError={Boolean(formik.touched.desc && formik.errors.desc)}
                    handleChange={formik.handleChange}
                    value={formik.values.desc}
                    As={'textarea'}
                    errorText={formik.errors.desc}
                />
                <SelectMakers
                    handleChange={formik.handleChange}
                    isError={Boolean(
                        formik.touched.makersId && formik.errors.makersId
                    )}
                    errorText={formik.errors.makersId}
                    makersList={makersList}
                    value={formik.values.makersId}
                />

                <CategogiesFormGroup
                    handleChange={formik.handleChange}
                    inputName={'categoriesId'}
                    values={formik.values.categoriesId}
                    isError={Boolean(
                        formik.touched.categoriesId &&
                            formik.errors.categoriesId
                    )}
                    errorText={formik.errors.categoriesId}
                />
                <div className={styles.inner}>
                    <input
                        type="submit"
                        className={styles.submit}
                        value={'Сохранить'}
                    />
                </div>
            </form>
        </div>
    )
}
