export const setInitialDataAction: IsetInitialDataAction = (table) => {
    return {
        type: 'SET_INITIAL_DATA',
        payload: {data: [...table]}
    }
}

export const sortTableAction: IsortTableAction = (table, sortByColumn, dataType, isAscending) => {
    
    const getItemsToCompare = (a: TtableRow, b: TtableRow) => {
        const item1 = a[sortByColumn] || null
        const item2 = b[sortByColumn] || null
        return [item1, item2]
    }

    const nullValuesComparison = (a: Tdata, b: Tdata) => {
        // null values are sorted at the end of the table
        return !b ? -1 : 1
    }

    const numericComparison = (a: number, b: number) => {
        const comparator = a < b ? 1 : -1
        return isAscending ? comparator : comparator * (-1)
    }

    const dateStringComparison = (a: string, b: string) => {
        const comparator = new Date(a) > new Date(b) ? 1 : -1
        return isAscending ? comparator : comparator * (-1)
    }

    const stringComparison = (a: string, b: string) => {
        const ascendingComparator = a.localeCompare(b, 'en-US', {numeric: true})
        const descendingComparator = b.localeCompare(a, 'en-US', {numeric: true})
        return isAscending ? ascendingComparator : descendingComparator
    }

    let sortedTable: Ttable

    switch (dataType) {
        case 'number':
            sortedTable = [...table].sort((a, b) => {
                const [item1, item2] = getItemsToCompare(a, b)
                if (!item1 || !item2) return nullValuesComparison(item1, item2)
                return numericComparison(item1 as number, item2 as number)
            })
            break
        case 'date':
            sortedTable = [...table].sort((a, b) => {
                const [item1, item2] = getItemsToCompare(a, b)
                if (!item1 || !item2) return nullValuesComparison(item1, item2)
                return dateStringComparison(item1 as string, item2 as string)
            })
            break
        case 'string':
            sortedTable = [...table].sort((a, b) => {
                const [item1, item2] = getItemsToCompare(a, b)
                if (!item1 || !item2) return nullValuesComparison(item1, item2)
                return stringComparison(item1 as string, item2 as string)
            })
            break
        default:
            sortedTable = [...table]
            break
    }

    return {
        type: 'SORT_TABLE',
        payload: {data: sortedTable},
    }

}

export const displaySlicedTableAction: IdisplaySlicedTableAction = (table, maxTableRows) => {

    return {
        type: 'DISPLAY_SLICED_TABLE',
        payload: {
            data: table,
            maxTableRows: parseInt(maxTableRows) || NaN
        }
    }

}