import { Text } from '@/ui'
import { AddFormInput } from '@modules/admin/AddFormInput/AddFormInput'
import { SelectMakers } from '@modules/admin/SelectMakers/SelectMakers'
import { validate } from './validate'
import classNames from 'classnames'
import { Field, useFormik } from 'formik'
import * as React from 'react'
import styles from 'modules/admin/AddForm/addform.scss'

interface IAddFormProps {}

export interface IAddProductFormValues {
    name: string
    price: string
    desc: string
    sizeValue: string
    brand: string
    makerId: string
}

export const AddForm: React.FC<IAddFormProps> = ({}) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            desc: '',
            sizeValue: '',
            brand: '',
            makerId: 'm1',
        },
        validate,
        onSubmit: values => {
            console.log(values)
        },
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Text size={24} weight={600}>
                    Добавить новый продукт
                </Text>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <AddFormInput
                    name={'name'}
                    title={'название'}
                    isError={Boolean(formik.touched.name && formik.errors.name)}
                    handleChange={formik.handleChange}
                    value={formik.values.name}
                    errorText={formik.errors.name}
                />
                <AddFormInput
                    name={'price'}
                    title={'цена'}
                    isError={Boolean(
                        formik.touched.price && formik.errors.price
                    )}
                    handleChange={formik.handleChange}
                    value={formik.values.price}
                    errorText={formik.errors.price}
                />
                <AddFormInput
                    name={'brand'}
                    title={'бренд'}
                    isError={Boolean(
                        formik.touched.brand && formik.errors.brand
                    )}
                    handleChange={formik.handleChange}
                    value={formik.values.brand}
                    errorText={formik.errors.brand}
                />
                <AddFormInput
                    name={'sizeValue'}
                    title={'размер'}
                    isError={Boolean(
                        formik.touched.sizeValue && formik.errors.sizeValue
                    )}
                    handleChange={formik.handleChange}
                    value={formik.values.sizeValue}
                    errorText={formik.errors.sizeValue}
                />
                <AddFormInput
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
                    value={formik.values.makerId}
                />

                <div className={styles.inner}>
                    <input
                        type="submit"
                        className={styles.submit}
                        value={'Добавить'}
                    />
                </div>
            </form>
        </div>
    )
}
