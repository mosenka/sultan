import {IAddProductFormValues} from '@modules/admin/AddForm/AddForm'
import {ILoginFormValues} from '@pages/LoginPage/LoginPage'
import {FormikErrors} from 'formik'

export const validate = (values: IAddProductFormValues) => {
    let errors: FormikErrors<IAddProductFormValues> = {}
    if (!values.name) {
        errors.name = 'Обязательное поле'
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

    return errors
}
