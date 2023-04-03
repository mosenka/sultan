import * as React from 'react'
import {v4 as uuidv4} from 'uuid'

import styles from '@ui/form/InputCheckbox/inputcheckbox.scss'

interface IInputCheckboxProps {
    id: string
    name: string
    isChecked: boolean
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void
    inputName?: string
}

export const InputCheckbox: React.FC<IInputCheckboxProps> = ({
                                                                 id,
                                                                 name,
                                                                 isChecked,
                                                                 handleChange,
                                                                 inputName = '',
                                                             }) => {
    const labelId = uuidv4()

    return (
        <div className={styles.wrapper}>
            <input
                type="checkbox"
                className={styles.input}
                id={labelId}
                value={id}
                name={inputName}
                checked={isChecked}
                onChange={handleChange}
            />
            <label htmlFor={labelId} className={styles.label}>
                {name}
            </label>
        </div>
    )
}
