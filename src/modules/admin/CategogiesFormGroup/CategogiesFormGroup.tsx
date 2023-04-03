import { fetchCategories } from '@/api'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { InputCheckbox } from '@/ui'
import { useEffect } from 'react'
import * as React from 'react'
import styles from './categogiesformgroup.scss'
import { v4 as uuidv4 } from 'uuid'

interface ICategogiesFormGroutProps {
    handleChange: (e: React.ChangeEvent<any>) => void
    inputName: string
    values: string[]
    isError: boolean
    errorText?: string | string[]
}

export const CategogiesFormGroup: React.FC<ICategogiesFormGroutProps> = ({
    handleChange,
    inputName,
    values,
    isError,
    errorText = '',
}) => {
    const { categories } = useAppSelector(state => state.categoriesReducer)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const inputList = categories?.map(category => {
        return (
            <InputCheckbox
                id={category.id}
                key={category.id}
                name={category.name}
                isChecked={values.includes(category.id)}
                handleChange={handleChange}
                inputName={inputName}
            />
        )
    })

    // const inputList = ''

    return (
        <>
            <div className={styles.inner}>
                <div className={styles.title}>Выберите категорию</div>
                {inputList}
            </div>
            {isError && <p className={styles.error}>{errorText}</p>}
        </>
    )
}
