import { ILoginFormValues } from '@pages/LoginPage/LoginPage'
import { FormikErrors } from 'formik'

export const validate = (values: ILoginFormValues) => {
    let errors: FormikErrors<ILoginFormValues> = {}
    if (!values.userName) {
        errors.userName = 'Обязательное поле'
    }

    if (!values.password) {
        errors.password = 'Обязательное'
    }

    return errors
}
