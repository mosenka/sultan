import {fetchProductById} from "@/api/ProductService";
import {useAppDispatch, useAppSelector} from "@hooks/useReducer";
import {useEffect} from "react";


interface IProductLoaderParams {
    params: string
}

export const useProductLoader = (params: string): string => {

    return ''

}