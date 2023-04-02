import * as React from 'react'

import styles from '@ui/form/InputCheckbox/inputcheckbox.scss'

interface IInputCheckboxProps {
    id: string
    name: string
    isChecked: boolean
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void
}

export const InputCheckbox: React.FC<IInputCheckboxProps> = ({
    id,
    name,
    isChecked,
    handleChange,
}) => {
    return (
        <div className={styles.wrapper}>
            <input
                type="checkbox"
                className={styles.input}
                id={id}
                value={id}
                checked={isChecked}
                onChange={handleChange}
            />
            <label htmlFor={id} className={styles.label}>
                {name}
            </label>
        </div>
    )
}
