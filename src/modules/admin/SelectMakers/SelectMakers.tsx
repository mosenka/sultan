import * as React from 'react'

import styles from './select.scss'

import { IMakersListItem } from '@store/makers/MakersSlice'

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
    const options = makersList?.map(maker => {
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
