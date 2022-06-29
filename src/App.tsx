import { useState, useEffect } from "react"

import Table from './ components/Table'
import SlicerContainer from "./containers/slicer"
import Searchbar from "./ components/Searchbar"

import sliceTable from "./helpers/sliceTable"
import queryTable from "./helpers/queryTable"

import initialData from './fixtures/employees.json'

import './App.css'

function App () {

    const [results, setResults] = useState<Ttable>(initialData)
    
    const [maxTableRows, setMaxTableRows] = useState<string>("")

    const [inputValue, setInputValue] = useState<string>("")

    useEffect(() => {
        const slicedResults = sliceTable({data: results, initialData, maxTableRows})
        setResults(slicedResults)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [maxTableRows])
    
    useEffect(() => {
        const filteredResults = queryTable(initialData, inputValue)
        setResults(filteredResults)
    }, [inputValue])

    //console.log(Date.now())

    return (
        
        <div className="table-container">

            <div className="row">

                <SlicerContainer setMaxTableRows={setMaxTableRows} />

                <Searchbar setInputValue={setInputValue}/>

            </div>

            <Table results={results} setResults={setResults} />

        </div>
        
    )
}

export default App
