import { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import Table from './ components/Table'

import { setInitialDataAction } from "./store/tableActions"
import { tableSelector } from "./store/tableSelector"

import employeesData from './fixtures/employees.json'


function App () {

    const tableStore = useSelector(tableSelector)

    const dispatch = useDispatch()

    const setInitialData = useCallback((table: Ttable) => {
        dispatch(setInitialDataAction(table))
    }, [dispatch])

    useEffect(() => {
        setInitialData(employeesData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Table data={tableStore} />
    )
}

export default App
