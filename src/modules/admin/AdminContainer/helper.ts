import { ICategory } from '@/models'

export function getCategoryNameById(
    arr: string[],
    categories: ICategory[]
): string[] {
    const result: string[] = []

    arr.forEach(item => {
        const category = categories.find(category => category.id === item)
        if (category == null) return
        result.push(category?.name)
    })

    return result
}
