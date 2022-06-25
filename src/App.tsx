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
        console.log('ini')
    })

    return (
        <Table data={tableStore} />
    )
}

export default App
