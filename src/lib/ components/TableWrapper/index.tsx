import { useState, useEffect } from "react"

import { Container, Row } from "./style"

import getRangeDataRowByPage from '../../helpers/dataPerPage'
import { tableIsEmpty } from "../../helpers/isEmptyData"

import Table from '../Table'
import SlicerContainer from "../../containers/slicer"
import Searchbar from "../Searchbar"
import Pagination from "../Pagination"
import RowCounter from "../RowCounter"


export function TableWrapper ({initialData}: ITableWrapper) {

    const [results, setResults] = useState<Ttable>(initialData)
    
    const [rowsPerPage, setRowsPerPage] = useState<number | "all">("all")

    const [activePage, setActivePage] = useState<number>(1)

    const [pagesCount, setPagesCount] = useState<number>(0)

    const [rangeOfActivePageResults, setRangeOfActivePageResults] = useState({startRow: 0, endRow: initialData.length})

    const activePageResults = results.slice(rangeOfActivePageResults.startRow, rangeOfActivePageResults.endRow)


    useEffect(() => {

        const [startRow, endRow] = getRangeDataRowByPage(activePage, results.length, rowsPerPage)

        setRangeOfActivePageResults({startRow, endRow})

        const hasMultiplePages = results.length > 0 && rowsPerPage !== "all"

        const newPagesCount = hasMultiplePages ? Math.ceil(results.length / rowsPerPage) : 1

        setPagesCount(newPagesCount)

    }, [activePage, results, rowsPerPage])
    

    useEffect(() => {
        setActivePage(1)
    }, [results, rowsPerPage])
  

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

            <Row className="row">

                <RowCounter
                    startRow={1 +rangeOfActivePageResults.startRow}
                    endRow={rangeOfActivePageResults.endRow}
                    maxEntries={results.length}
                    tableIsEmpty={tableIsEmpty(results)}
                />

                <Pagination 
                    activePage={activePage} 
                    setActivePage={setActivePage}
                    pagesCount={pagesCount}
                />
            </Row>

        </Container>
        
    )
}
