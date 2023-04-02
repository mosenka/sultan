export const createIdCollection = (arr: any[], key: string): Set<any> => {
    const set = new Set()

    arr.forEach(item => {
        if (item[key]) {
            set.add(item.id)
        }
    })

    return set
}
