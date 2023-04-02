import { useEffect, useState } from 'react'
import * as React from 'react'
import styles from './sortingselect.scss'

import { useAppDispatch, useAppSelector } from '@/hooks'
import { Dropdown } from '@/ui'

import { selectItem } from '@store/sorting/SortingSlice'

export const SortingSelect: React.FC = () => {
    const { sortingList } = useAppSelector(state => state.sortingReducer)
    const dispatch = useAppDispatch()

    const [selectedItem, setSelectedItem] = useState<string>('')

    useEffect(() => {
        if (!sortingList) return
        const item = sortingList.find(item => item.isSelected)
        if (item != null) {
            setSelectedItem(item.name)
        }
    }, [sortingList])

    const optionsList = sortingList.map((option, index) => {
        return (
            <p key={index} onClick={() => dispatch(selectItem(option.name))}>
                {option.name}
            </p>
        )
    })

    return (
        <>
            <Dropdown title={'Сортировка'} selectedItem={selectedItem}>
                {optionsList}
            </Dropdown>
        </>
    )
}
