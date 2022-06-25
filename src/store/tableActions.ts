export const setInitialDataAction: IsetInitialDataAction = (table) => {
    return {
        type: 'SET_INIT_DATA',
        payload: table
    }
}

export const sortTableAction: IsortTableAction = (table) => {
    
    const newState: any = {
        ...table,
    }

    return {
        type: 'SORT_TABLE',
        payload: newState,
    }

}
