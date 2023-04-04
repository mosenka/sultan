import { FormikErrors } from 'formik'

import { ILoginFormValues } from '@pages/LoginPage/LoginPage'

export const validate = (
    values: ILoginFormValues
): FormikErrors<ILoginFormValues> => {
    const errors: FormikErrors<ILoginFormValues> = {}
    if (values.userName.length === 0) {
        errors.userName = 'Обязательное поле'
    }

    if (values.password.length === 0) {
        errors.password = 'Обязательное поле'
    }

    return errors
}
