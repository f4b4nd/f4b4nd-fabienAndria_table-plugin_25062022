import { useState, useEffect } from "react"

import Table from './ components/Table'
import SlicerContainer from "./containers/slicer"
import Searchbar from "./ components/Searchbar"

import sliceTable from "./helpers/sliceTable"
import queryTable from "./helpers/queryTable"
import getRangeDataRowByPage from './helpers/dataPerPage';

import JSONData from './fixtures/employees.json'

import './App.css'
import Pagination from "./ components/Pagination"

function App () {

    const initialData = JSONData.slice(0, 150)

    const [results, setResults] = useState<Ttable>(initialData)
    
    const [rowsPerPage, setRowsPerPage] = useState<string>("")

    const [inputValue, setInputValue] = useState<string>("")

    const [activePage, setActivePage] = useState<number>(1)

    useEffect(() => {
        const [startRow, endRow] = getRangeDataRowByPage(activePage, results.length, rowsPerPage)
        const pageResults = results.slice(startRow, endRow)
        const slicedResults = sliceTable({data: pageResults, initialData, rowsPerPage})
        setResults(slicedResults)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rowsPerPage, activePage])
    
    useEffect(() => {
        const queryResults = queryTable(initialData, inputValue)
        setResults(queryResults)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue])

    useEffect(() => {

    })

    console.log('act', activePage)

    return (
        
        <div className="table-container">

            <div className="row">

                <SlicerContainer setRowsPerPage={setRowsPerPage} />

                <Searchbar setInputValue={setInputValue}/>

            </div>

            <Table results={results} setResults={setResults} />

            <Pagination 
                activePage={activePage} 
                setActivePage={setActivePage} 
            />

        </div>
        
    )
}

export default App
