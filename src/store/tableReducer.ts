import initialTableData from '../fixtures/employees.json'

//const initialTableData: Ttable = []

export const tableReducer: ItableReducer = function (state = initialTableData, action) {
    
    switch (action.type) {

        case 'SET_INITIAL_DATA':
            const initData = action?.payload?.data || state
            return [...initData]

        case 'SORT_TABLE':
            const sortedData = action?.payload?.data || state
            return [...sortedData]
        
        case 'DISPLAY_SLICED_TABLE':

            let slicedData: Ttable

            const maxTableRows = action?.payload?.maxTableRows

            if (!maxTableRows) {
                slicedData = initialTableData
            }

            else if (maxTableRows >= state.length) {
                slicedData = initialTableData.slice(0, maxTableRows) 
            }

            else {
                slicedData = state.slice(0, maxTableRows)
            }
            
            return [...slicedData]

        default:
            return state
    }

}