import { FormikErrors } from 'formik'

import { IAddProductFormValues } from '@modules/admin/AdminForm/AdminForm'

export const validate = (
    values: IAddProductFormValues
): FormikErrors<IAddProductFormValues> => {
    const errors: FormikErrors<IAddProductFormValues> = {}
    if (values.name.length === 0) {
        errors.name = 'Обязательное поле'
    }
    if (values.name.length < 5) {
        errors.name = 'Минимальное количество символов 4'
    }
    if (values.desc.length === 0) {
        errors.desc = 'Обязательное поле'
    }
    if (!values.price) {
        errors.price = 'Обязательное поле'
    }
    if (!isFinite(+values.price)) {
        errors.price = 'Введите число'
    }

    if (values.brand.length === 0) {
        errors.brand = 'Обязательное поле'
    }

    if (values.sizeValue.length === 0) {
        errors.sizeValue = 'Обязательное поле'
    }

    if (values.desc.length === 0) {
        errors.desc = 'Обязательное поле'
    }

    if (values.desc.length < 4) {
        errors.desc = 'Минимальное количество символов 4'
    }

    if (values.makersId.length === 0) {
        errors.makersId = 'Обязательное поле'
    }

    if (values.categoriesId.length === 0) {
        errors.categoriesId = 'Обязательное поле'
    }

    return errors
}
