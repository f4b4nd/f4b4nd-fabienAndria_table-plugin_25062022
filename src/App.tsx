import { useState, useEffect } from "react"

import Table from './ components/Table'
import SlicerContainer from "./containers/slicer"
import Searchbar from "./ components/Searchbar"

import sliceTable from "./helpers/sliceTable"
import queryTable from "./helpers/queryTable"

import JSONData from './fixtures/employees.json'

import './App.css'
import Pagination from "./ components/Pagination"

function App () {

    const initialData = JSONData.slice(0, 20)

    const [results, setResults] = useState<Ttable>(initialData)
    
    const [maxTableRows, setMaxTableRows] = useState<string>("")

    const [inputValue, setInputValue] = useState<string>("")

    const [activePage, setActivePage] = useState<number>(1)

    useEffect(() => {
        const slicedResults = sliceTable({data: results, initialData, maxTableRows})
        setResults(slicedResults)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [maxTableRows])
    
    useEffect(() => {
        const filteredResults = queryTable(initialData, inputValue)
        setResults(filteredResults)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue])

    console.log('act', activePage)

    return (
        
        <div className="table-container">

            <div className="row">

                <SlicerContainer setMaxTableRows={setMaxTableRows} />

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
