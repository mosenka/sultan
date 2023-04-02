import { useAppSelector, useAppDispatch } from './useReducer'

import { useFilterByCategories } from '@hooks/useFilterByCategories'
import { useFilterByMakers } from '@hooks/useFilterByMakers'
import { useFilterByPrice } from '@hooks/useFilterByPrice'
import { useProductList } from '@hooks/useProductList'
import { useSearchMakers } from '@hooks/useSearchMakers'
import { useSortProductList } from '@hooks/useSortProductList'

export {
    useAppDispatch,
    useAppSelector,
    useProductList,
    useSearchMakers,
    useFilterByMakers,
    useFilterByPrice,
    useFilterByCategories,
    useSortProductList,
}
