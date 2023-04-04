import * as React from 'react'

import { Navigate } from 'react-router-dom'

import styles from './adminpage.scss'

import { useAppSelector } from '@/hooks'
import { AdminContainer } from '@/modules'

export const AdminPage: React.FC = () => {
    const { isAuth } = useAppSelector(state => state.loginReducer)

    if (!isAuth) {
        return <Navigate to="/login" replace={true} />
    }

    return (
        <div className={styles.wrapper}>
            <AdminContainer />
        </div>
    )
}
