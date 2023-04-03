import { IAddProductFormValues } from '@modules/admin/AdminForm/AdminForm'
import { FormikErrors } from 'formik'

export const validate = (values: IAddProductFormValues) => {
    let errors: FormikErrors<IAddProductFormValues> = {}
    if (!values.name) {
        errors.name = 'Обязательное поле'
    }
    if (values.name.length < 5) {
        errors.name = 'Минимальное количество символов 4'
    }
    if (!values.desc) {
        errors.desc = 'Обязательное поле'
    }
    if (!values.price) {
        errors.price = 'Обязательное поле'
    }
    if (!isFinite(+values.price)) {
        errors.price = 'Введите число'
    }

    if (!values.brand) {
        errors.brand = 'Обязательное поле'
    }

    if (!values.sizeValue) {
        errors.sizeValue = 'Обязательное поле'
    }

    if (!values.desc) {
        errors.desc = 'Обязательное поле'
    }

    if (values.desc.length < 4) {
        errors.desc = 'Минимальное количество символов 4'
    }

    if (!values.makersId) {
        errors.makersId = 'Обязательное поле'
    }

    if (values.categoriesId.length === 0) {
        errors.categoriesId = 'Обязательное поле'
    }

    return errors
}
