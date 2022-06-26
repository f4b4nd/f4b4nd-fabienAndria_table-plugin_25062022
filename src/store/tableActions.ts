export const setInitialDataAction: IsetInitialDataAction = (table) => {
    return {
        type: 'SET_INITIAL_DATA',
        payload: {data: table}
    }
}

export const sortTableAction: IsortTableAction = (table, sortByColumn, dataType, isAscending) => {
    
    const sortedTable = [...table].sort((a, b) => {

        const var1 = a[sortByColumn] || null
        const var2 = b[sortByColumn] || null

        if (!var1 || !var2) {
            return !var2 ? -1 : 1 
        }

        if (dataType === 'number') {
            const comparator = var1 < var2 ? 1 : -1
            return isAscending ? comparator :  comparator * (-1)
        }

        if (dataType === 'date') {
            const comparator = new Date(var1) > new Date(var2) ? 1 : -1
            return isAscending ? comparator : comparator * (-1)
        }

        if (dataType === 'string') {
            const str1 = var1 as string
            const str2 = var2 as string
            return isAscending ? str1.localeCompare(str2) : str2.localeCompare(str1)
        }

        return 1
        
    })

    return {
        type: 'SORT_TABLE',
        payload: {data: sortedTable},
    }

}
