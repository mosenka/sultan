import { fetchMakers } from '@/api'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { IMakersListItem } from '@store/makers/MakersSlice'
import { useEffect } from 'react'
import * as React from 'react'
import styles from './select.scss'

interface ISelectProps {
    isError: boolean
    errorText?: string
    handleChange: (e: React.ChangeEvent<any>) => void
    makersList: IMakersListItem[]
    value: string
}

export const SelectMakers: React.FC<ISelectProps> = ({
    handleChange,
    isError,
    errorText = '',
    makersList,
    value,
}) => {
    let options = makersList?.map(maker => {
        return (
            <option key={maker.id} value={maker.id}>
                {maker.name}
            </option>
        )
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
                name={'makersId'}
                value={value}
            >
                {options}
            </select>
            {isError && <p className={styles.error}>{errorText}</p>}
        </>
    )
}
