import { IProduct } from '@/models'

import { useFilterByCategories } from '@hooks/useFilterByCategories'
import { useFilterByMakers } from '@hooks/useFilterByMakers'
import { useFilterByPrice } from '@hooks/useFilterByPrice'
import { useSortProductList } from '@hooks/useSortProductList'

export const useProductList = (
    productsList: IProduct[],
    sort: boolean
): IProduct[] => {
    const sortedProductList = useSortProductList(productsList)
    const filteredByMakersList = useFilterByMakers(sortedProductList, sort)
    const filteredByPiceList = useFilterByPrice(filteredByMakersList, sort)
    const filteredByCategoryList = useFilterByCategories(filteredByPiceList)

    return filteredByCategoryList
}
