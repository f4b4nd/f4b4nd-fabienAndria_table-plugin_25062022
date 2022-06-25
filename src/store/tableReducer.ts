const initialTableData: Ttable = []

export const tableReducer: ItableReducer = function (state = initialTableData, action) {
    
    //const data = action?.payload?.data || []

    switch (action.type) {

        case 'SET_INITIAL_DATA':
            return action?.payload?.data || []

        case 'SORT_TABLE':
            const sortedData = action?.payload?.data || state
            return [...sortedData]
            
        default:
            return state
    }
}