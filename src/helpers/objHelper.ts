export const getMaxPrice = (arr: any[]): number => {
    const arrPrices: number[] = []

    arr.forEach(item => arrPrices.push(item.price))

    return Math.max(...arrPrices)
}
