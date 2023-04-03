import classNames from 'classnames'
import * as React from 'react'
import styles from './adminforminput.scss'

type TElems = 'input' | 'textarea'

interface IAddFormInputProps {
    name: string
    title: string
    isError: boolean
    handleChange: (e: React.ChangeEvent<any>) => void
    value: number | string
    errorText?: string
    As?: TElems
}

export const AdminFormInput: React.FC<IAddFormInputProps> = ({
    name,
    title,
    isError,
    handleChange,
    value,
    errorText = '',
    As = 'input',
}) => {
    return (
        <div className={styles.field}>
            <label className={styles.label} htmlFor="name">
                {title}
            </label>
            <As
                className={classNames(styles.input, {
                    [styles['is-error']]: isError,
                })}
                type="text"
                name={name}
                id={name}
                placeholder={title}
                onChange={handleChange}
                value={value}
            />
            {isError ? <p className={styles.error}>{errorText}</p> : null}
        </div>
    )
}
