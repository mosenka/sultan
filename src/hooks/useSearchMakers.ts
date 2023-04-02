import { useMemo } from 'react'

import { IMakersListItem } from '@store/makers/MakersSlice'

export const useSearchMakers = (
    makersList: IMakersListItem[],
    query: string,
    search: boolean
): IMakersListItem[] => {
    const sortedMakers = useMemo(() => {
        if (query.length > 0) {
            return makersList?.filter(maker =>
                maker.name.toLowerCase().includes(query.toLowerCase())
            )
        }
        return makersList
    }, [makersList, search])

    return sortedMakers
}
