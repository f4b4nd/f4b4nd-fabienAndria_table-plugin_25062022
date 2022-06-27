import { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import Table from './ components/Table'
import SlicerContainer from "./containers/slicer"
import Searchbar from "./ components/Searchbar"

import { setInitialDataAction } from "./store/tableActions"
import { tableSelector } from "./store/tableSelector"

import employeesData from './fixtures/employees.json'

import './App.css'

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
        <>
        <div className="table-container">

            <div className="row">

                <SlicerContainer />

                <Searchbar />

            </div>

            <Table data={tableStore} />

        </div>
        </>
    )
}

export default App
