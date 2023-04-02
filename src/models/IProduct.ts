import { IMaker } from '@/models/IMaker'

export type TSizeType = 'volume' | 'weight'

export interface IProduct {
    id: string
    name: string
    img: string
    sizeType: TSizeType
    sizeValue: string
    makersId: string
    brand: string
    price: number
    desc: string
    makers: IMaker
    categoriesId: string[]
}
