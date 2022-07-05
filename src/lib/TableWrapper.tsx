import { useState, useEffect } from "react"

import getRangeDataRowByPage from './helpers/dataPerPage'

import Table from './ components/Table'
import SlicerContainer from "./containers/slicer"
import Searchbar from "./ components/Searchbar"
import Pagination from "./ components/Pagination"


import JSONData from './fixtures/employees.json'

//import './App.css'

export function TableWrapper () {

    const initialData = JSONData.slice(0, 150)

    const [results, setResults] = useState<Ttable>(initialData)
    
    const [rowsPerPage, setRowsPerPage] = useState<number>(NaN)

    const [activePage, setActivePage] = useState<number>(1)

    const [pagesCount, setPagesCount] = useState<number>(0)

    const [rangeOfActivePageResults, setRangeOfActivePageResults] = useState({startRow: 0, endRow: initialData.length})

    const activePageResults = results.slice(rangeOfActivePageResults.startRow, rangeOfActivePageResults.endRow)


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

                <SlicerContainer 
                    setRowsPerPage={setRowsPerPage} 
                />

                <Searchbar 
                    initialData={initialData} 
                    setResults={setResults}  
                />

            </div>

            <Table 
                results={activePageResults} 
                setResults={setResults} 
            />

            <Pagination 
                activePage={activePage} 
                setActivePage={setActivePage}
                pagesCount={pagesCount}
            />

        </div>
        
    )
}
