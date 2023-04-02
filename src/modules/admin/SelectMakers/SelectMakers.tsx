import { fetchMakers } from '@/api'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useEffect } from 'react'
import * as React from 'react'
import styles from './select.scss'

interface ISelectProps {
    handleChange: (e: React.ChangeEvent<any>) => void
}

export const SelectMakers: React.FC<ISelectProps> = ({ handleChange }) => {
    const { makersList } = useAppSelector(state => state.makersReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (makersList.length != 0) return

        dispatch(fetchMakers())
    }, [])

    let options = makersList?.map(maker => {
        return <option key={maker.id}>{maker.name}</option>
    })

    return (
        <>
            <label className={styles.label} htmlFor="makers">
                Производитель
            </label>
            <select
                onChange={handleChange}
                id="makers"
                className={styles.select}
            >
                {options}
            </select>
        </>
    )
}
