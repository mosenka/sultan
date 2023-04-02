import { ICategory } from '@/models'

export function getCategoryNameById(
    arr: string[],
    categories: ICategory[]
): string[] {
    let result: string[] = []

    arr.forEach(item => {
        let category = categories.find(category => category.id === item)
        if (!category) return
        result.push(category?.name)
    })

    return result
}
