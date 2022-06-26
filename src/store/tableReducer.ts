const initialTableData: Ttable = []

export const tableReducer: ItableReducer = function (state = initialTableData, action) {
    
    switch (action.type) {

        case 'SET_INITIAL_DATA':
            const initData = action?.payload?.data || state
            return [...initData]

        case 'SORT_TABLE':
            const sortedData = action?.payload?.data || state
            return [...sortedData]
        
        case 'DISPLAY_SLICED_TABLE':
            const slicedData = action?.payload?.data || state
            return [...slicedData]
        
        default:
            return state
    }

}