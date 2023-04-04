import classNames from 'classnames'

import {useFormik} from 'formik'
import {useEffect} from 'react'

import * as React from 'react'

import {Link, Navigate} from 'react-router-dom'

import styles from './loginpage.scss'
import {validate} from './validate'

import {login} from '@/api/LoginService'
import {Popup} from '@/components'
import {useAppDispatch, useAppSelector} from '@/hooks'
import {LoadingSpinner, Text} from '@/ui'
import {setIsAuth} from '@store/auth/AuthSlice'

export interface ILoginFormValues {
    userName: string
    password: string
}

export const LoginPage: React.FC = () => {
    const {isLoading, isAuth, error} = useAppSelector(
        state => state.loginReducer
    )
    const dispath = useAppDispatch()

    useEffect(() => {
        const user = localStorage.getItem('user')

        if (!user) return;
        if (user.length === 0) return;
        const {accessToken} = JSON.parse(user)
        if (!accessToken) return

        dispath(setIsAuth())

    }, [])

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            const {userName, password} = values
            dispath(login({login: userName, password}))
        },
    })

    if (isAuth) {
        return <Navigate to="/admin" replace={true}/>
    }

    return (
        <>
            <Popup isOpen={true} closePopup={() => {
            }}>
                {error.length > 0 ? (
                    <p className={styles.error}>{error}</p>
                ) : (
                    ''
                )}
                {isLoading ? (
                    <LoadingSpinner/>
                ) : (
                    <>
                        <div className={styles.title}>
                            <Text size={24} weight={600}>
                                Пожалуйста, авторизуйтесь
                            </Text>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className={styles.field}>
                                <label
                                    className={styles.label}
                                    htmlFor="userName"
                                >
                                    Логин*
                                </label>
                                <input
                                    className={classNames(styles.input, {
                                        [styles['is-error']]:
                                        formik.touched.userName &&
                                        formik.errors.userName,
                                    })}
                                    type="text"
                                    name="userName"
                                    id="userName"
                                    placeholder="Логин"
                                    onChange={formik.handleChange}
                                    value={formik.values.userName}
                                />
                                {formik.touched.userName &&
                                formik.errors.userName ? (
                                    <p className={styles.error}>
                                        {formik.errors.userName}
                                    </p>
                                ) : null}
                            </div>
                            <div className={styles.field}>
                                <label
                                    className={styles.label}
                                    htmlFor="password"
                                >
                                    Пароль *
                                </label>
                                <input
                                    className={classNames(styles.input, {
                                        [styles['is-error']]:
                                        formik.touched.password &&
                                        formik.errors.password,
                                    })}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Пароль"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                {formik.touched.password &&
                                formik.errors.password ? (
                                    <p className={styles.error}>
                                        {formik.errors.password}
                                    </p>
                                ) : null}
                            </div>
                            <div className={styles.inner}>
                                <input
                                    type="submit"
                                    className={styles.submit}
                                    value={'войти'}
                                />
                                <Link to=".." className={styles.back}>
                                    Назад
                                </Link>
                            </div>
                        </form>
                    </>
                )}
            </Popup>
        </>
    )
}
