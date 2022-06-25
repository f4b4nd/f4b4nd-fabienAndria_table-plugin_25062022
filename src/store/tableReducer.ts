const initialTableData: Ttable = []

export const tableReducer: ItableReducer = function (state = initialTableData, action) {

    switch (action.type) {

        case 'SET_INIT_DATA':
            const payload = action.payload ? action.payload : []
            return [...state, ...payload]

        case 'SORT_TABLE':
            return {...state, ...action.payload}
            
        default:
            return state
    }
}