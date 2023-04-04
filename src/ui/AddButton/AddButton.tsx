import * as React from 'react'

import styles from './addbutton.scss'

interface IAddButtonProps {
    text: string
    handlerClick?: () => void
}

const NOOP = (): void => {}

export const AddButton: React.FC<IAddButtonProps> = ({
    text,
    handlerClick = NOOP,
}) => {
    return (
        <button className={styles.button} type="button" onClick={handlerClick}>
            {text}
        </button>
    )
}
