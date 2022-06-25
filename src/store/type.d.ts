interface Action {
    type: any,
    payload?: DefaultObject[]
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
    (table: Ttable): Action
}