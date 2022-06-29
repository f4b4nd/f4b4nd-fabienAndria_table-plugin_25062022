const sortTable = ({results, setResults, sortByColumn, dataType, isAscending}: IsortTable) => {
    
    const getItemsToCompare = (a: TtableRow, b: TtableRow) => {
        const item1 = a[sortByColumn] || null
        const item2 = b[sortByColumn] || null
        return [item1, item2]
    }

    let sortedTable: Ttable

    switch (dataType) {
        case 'number':
            sortedTable = [...results].sort((a, b) => {
                const [item1, item2] = getItemsToCompare(a, b)
                if (!item1 || !item2) return nullValuesComparison(item1, item2)
                return numericComparison(item1 as number, item2 as number, isAscending)
            })
            break
        case 'date':
            sortedTable = [...results].sort((a, b) => {
                const [item1, item2] = getItemsToCompare(a, b)
                if (!item1 || !item2) return nullValuesComparison(item1, item2)
                return dateStringComparison(item1 as string, item2 as string, isAscending)
            })
            break
        case 'string':
            sortedTable = [...results].sort((a, b) => {
                const [item1, item2] = getItemsToCompare(a, b)
                if (!item1 || !item2) return nullValuesComparison(item1, item2)
                return stringComparison(item1 as string, item2 as string, isAscending)
            })
            break
        default:
            sortedTable = [...results]
            break
    }

    setResults(sortedTable)

}

export default sortTable

const nullValuesComparison = (a: Tdata, b: Tdata) => {
    // null values are sorted at the end of the table
    return a && !b ? -1 : 1
}

const numericComparison = (a: number, b: number, isAscending: boolean) => {
    const comparator = a < b ? 1 : -1
    return isAscending ? comparator : comparator * (-1)
}

const dateStringComparison = (a: string, b: string, isAscending: boolean) => {
    const comparator = new Date(a) > new Date(b) ? 1 : -1
    return isAscending ? comparator : comparator * (-1)
}

const stringComparison = (a: string, b: string, isAscending: boolean) => {
    const ascendingComparator = a.localeCompare(b, 'en-US', {numeric: true})
    const descendingComparator = b.localeCompare(a, 'en-US', {numeric: true})
    return isAscending ? ascendingComparator : descendingComparator
}