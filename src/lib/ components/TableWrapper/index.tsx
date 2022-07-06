import { useState, useEffect } from "react"

import { Container, Row } from "./style"

import getRangeDataRowByPage from '../../helpers/dataPerPage'

import Table from '../Table'
import SlicerContainer from "../../containers/slicer"
import Searchbar from "../Searchbar"
import Pagination from "../Pagination"


//import JSONData from '../../fixtures/employees.json'
//const initialData = JSONData.slice(0, 150)


export function TableWrapper ({initialData}: ITableWrapper) {

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
        
        <Container className="table-container">

            <Row className="row">

                <SlicerContainer 
                    setRowsPerPage={setRowsPerPage} 
                />

                <Searchbar 
                    initialData={initialData} 
                    setResults={setResults}  
                />

            </Row>

            <Table 
                results={activePageResults} 
                setResults={setResults} 
            />

            <Pagination 
                activePage={activePage} 
                setActivePage={setActivePage}
                pagesCount={pagesCount}
            />

        </Container>
        
    )
}
