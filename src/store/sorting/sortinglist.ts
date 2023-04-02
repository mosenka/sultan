import { ISortingItem } from '@store/sorting/SortingSlice'

export const SORTINGLIST: ISortingItem[] = [
    {
        key: 'name',
        name: 'Названия по возрастанию',
        isReverse: false,
        isSelected: true,
    },
    {
        key: 'name',
        name: 'Названия по убыванию',
        isReverse: true,
        isSelected: false,
    },
    {
        key: 'price',
        name: 'Цена по возрастанию',
        isReverse: false,
        isSelected: false,
    },
    {
        key: 'price',
        name: 'Цена по убыванию',
        isReverse: true,
        isSelected: false,
    },
]
