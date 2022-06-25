export const setInitialDataAction: IsetInitialDataAction = (table) => {
    return {
        type: 'SET_INITIAL_DATA',
        payload: {data: table}
    }
}

export const sortTableAction: IsortTableAction = (table) => {
    
    const sortedTable = table.sort((a, b) => {

        const var1 = a.firstName || ""
        const var2 = b.firstName || ""

        if (typeof var1 === 'string' && typeof var2 === 'string') {
            return var1.localeCompare(var2)
        }

        return -1
        
    })

    return {
        type: 'SORT_TABLE',
        payload: {data: sortedTable},
    }

}
