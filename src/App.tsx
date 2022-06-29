import { useState } from "react"

import Table from './ components/Table'
import SlicerContainer from "./containers/slicer"
import Searchbar from "./ components/Searchbar"

import initialData from './fixtures/employees.json'

import './App.css'

function App () {

    const [results, setResults] = useState<Ttable>(initialData)

    const [inputValue, setInputValue] = useState<string>("")

    return (
        <>
        <div className="table-container">

            <div className="row">

                <SlicerContainer />

                <Searchbar />

            </div>

            <Table results={results} setResults={setResults}/>

        </div>
        </>
    )
}

export default App
