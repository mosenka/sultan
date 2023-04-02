import * as React from 'react'
import styles from './adminpage.scss'

import { useAppSelector } from '@/hooks'
import { AdminContainer } from '@/modules'
import { Navigate } from 'react-router-dom'

interface IAdminPageProps {}

export const AdminPage: React.FC<IAdminPageProps> = ({}) => {
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
