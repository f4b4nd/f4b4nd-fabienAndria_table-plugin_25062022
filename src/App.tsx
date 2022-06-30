import { useState, useEffect } from "react"

import Table from './ components/Table'
import SlicerContainer from "./containers/slicer"
import Searchbar from "./ components/Searchbar"

import queryTable from "./helpers/queryTable"
import getRangeDataRowByPage from './helpers/dataPerPage';

import JSONData from './fixtures/employees.json'

import './App.css'
import Pagination from "./ components/Pagination"

function App () {

    const initialData = JSONData.slice(0, 150)

    const [results, setResults] = useState<Ttable>(initialData)
    
    const [rowsPerPage, setRowsPerPage] = useState<number>(NaN)

    const [activePage, setActivePage] = useState<number>(1)

    const [rangeOfActivePageResults, setRangeOfActivePageResults] = useState({startRow: 0, endRow: initialData.length})

    const activePageResults = results.slice(rangeOfActivePageResults.startRow, rangeOfActivePageResults.endRow)

    const [pagesCount, setPagesCount] = useState<number>(0)

    useEffect(() => {

        const [startRow, endRow] = getRangeDataRowByPage(activePage, results.length, rowsPerPage)

        setRangeOfActivePageResults({startRow, endRow})

        const hasPages = results.length > 0 && rowsPerPage > 0

        const newPagesCount = hasPages ? Math.ceil(results.length / rowsPerPage) : 1

        setPagesCount(newPagesCount)

    }, [activePage, results, rowsPerPage])
    
    return (
        
        <div className="table-container">

            <div className="row">

                <SlicerContainer setRowsPerPage={setRowsPerPage} />

                <Searchbar initialData={initialData} setResults={setResults}  />

            </div>

            <Table results={activePageResults} setResults={setResults} />

            <Pagination 
                activePage={activePage} 
                setActivePage={setActivePage}
                pagesCount={pagesCount}
            />

        </div>
        
    )
}

export default App
