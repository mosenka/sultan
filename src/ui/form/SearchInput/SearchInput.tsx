import * as React from 'react'

import { EColor, EIcons, Icon } from '@/ui'
import styles from './searchinput.scss'

interface ISearchInputProps {
    value: string
    changeHandler: (event: React.SyntheticEvent<EventTarget>) => void
    handlerClick?: () => void
}

export const SearchInput: React.FC<ISearchInputProps> = ({
    value,
    changeHandler,
    handlerClick,
}) => {
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type="text"
                placeholder={'Поиск...'}
                value={value}
                onChange={changeHandler}
            />
            <button className={styles.button} onClick={handlerClick}>
                <Icon icon={EIcons.glass} width={14} stroke={EColor.white} />
            </button>
        </div>
    )
}
