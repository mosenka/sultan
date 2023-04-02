import * as React from 'react'
import { useEffect, useMemo, useState } from 'react'

import * as queryString from 'querystring'

import { fetchMakers } from '@/api/MakersService'
import { useAppDispatch, useAppSelector, useSearchMakers } from '@/hooks'

import { IMaker } from '@/models/IMaker'

import {
    Break,
    ErrorMessage,
    InputCheckbox,
    LoadingSpinner,
    MoreButton,
    SearchInput,
    Text,
} from '@/ui'
import { IMakersListItem, selectMaker } from '@store/makers/MakersSlice'

interface IMakerFilterProps {}

export const MakerFilter: React.FC<IMakerFilterProps> = ({}) => {
    const { isLoading, makersList, error } = useAppSelector(
        state => state.makersReducer
    )
    const dispatch = useAppDispatch()

    const [makers, setMakers] = useState<IMakersListItem[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [search, startSearch] = useState(false)

    useEffect(() => {
        dispatch(fetchMakers())
    }, [])

    useEffect(() => {
        if (!makersList) return
        setMakers(makersList)
    }, [makersList])

    const sortedMakers = useSearchMakers(makers, searchQuery, search)

    const searchInputChangeHandler = (
        event: React.SyntheticEvent<EventTarget, Event>
    ) => {
        const target = event.target as HTMLInputElement

        setSearchQuery(target.value)
    }

    const checkboxInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement

        dispatch(selectMaker(target.value))
    }

    if (isLoading) {
        return <LoadingSpinner />
    }
    if (error) {
        return <ErrorMessage text={error} />
    }

    const checkboxList = sortedMakers?.map(maker => {
        return (
            <InputCheckbox
                key={maker.id}
                id={maker.id}
                name={maker.name}
                isChecked={maker.isSelected}
                handleChange={checkboxInputHandler}
            />
        )
    })

    return (
        <div style={{ paddingTop: '30px' }}>
            <Text size={16} weight={500}>
                Производитель
            </Text>
            <Break size={15} top As={'p'} />
            <SearchInput
                value={searchQuery}
                changeHandler={searchInputChangeHandler}
                handlerClick={() => startSearch(!search)}
            />
            <Break size={15} top As={'p'} />
            {checkboxList}
            <MoreButton handlerClick={() => {}} />
        </div>
    )
}
