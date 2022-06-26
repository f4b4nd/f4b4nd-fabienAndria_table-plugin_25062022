type ActionTypes = 
    | 'SET_INITIAL_DATA' 
    | 'SORT_TABLE'
    | 'DISPLAY_SLICED_TABLE'

interface Action {
    type: ActionTypes,
    payload?: DefaultObject<any>
}

/**
 * Selector
 */
interface ItableSelector {
    ({table} : {table: Ttable}): Ttable
}

/**
 * Reducer
 */

 interface ItableReducer {
    (state: Ttable | undefined, action: Action): Ttable
}

/**
 * Actions
 */

 interface IsetInitialDataAction {
    (table: Ttable): Action
}

interface IsortTableAction {
    (table: Ttable, sortByColumn: string, dataType: string, isAscending: boolean): Action
}

interface IdisplaySlicedTableAction {
    (table: Table): Action
}