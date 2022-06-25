export const setInitialDataAction: IsetInitialDataAction = (table) => {
    return {
        type: 'SET_INITIAL_DATA',
        payload: {data: table}
    }
}

export const sortTableAction: IsortTableAction = (table, sortByColumn, isAscending) => {
    
    const sortedTable = [...table].sort((a, b) => {

        const var1 = a[sortByColumn] || null
        const var2 = b[sortByColumn] || null

        if (!var1 || !var2) {
            return 1
        }

        if (typeof var1 === 'string' && typeof var2 === 'string') {
            return isAscending ? var1.localeCompare(var2) : var2.localeCompare(var1)
        }

        return 1
        
    })

    return {
        type: 'SORT_TABLE',
        payload: {data: sortedTable},
    }

}
