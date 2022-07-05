import { useState } from "react"

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSort, faSortAsc, faSortDesc } from "@fortawesome/free-solid-svg-icons"

import sortTable from "../../helpers/sortTable"

import { Container, Cell, Group } from "./style"

const HeaderRow = ({dataTypes, results, setResults}: IHeaderRow) => {

    const colNames = Object.keys(dataTypes)

    const [activeColumn, setActiveColumn] = useState<string>("")

    return (
        <Container>
            {colNames.map((colName, idx)=> (

                <HeaderRow.Cell key={idx} data={colName}>
            
                    <HeaderRow.SortIcon 
                        results={results}
                        setResults={setResults}

                        sortByColumn={colName}
                        dataType={dataTypes[colName]}
                        activeColumn={activeColumn}
                        setActiveColumn={setActiveColumn}
                    />

                </HeaderRow.Cell>

            ))}
        </Container>
    )

}

HeaderRow.Cell = ({data, children}: IHeaderRowCell) => {
    return (
        <Cell>
            <span>{data}</span>
            {children}
        </Cell>
    )
}

HeaderRow.SortIcon = function SortIcon ({sortByColumn, dataType, activeColumn, setActiveColumn, results, setResults}: IHeaderRowSortIcon) {

    const [isAscending, setIsAscending] = useState<boolean>(true)

    const handleClick = () => {
        setActiveColumn(sortByColumn)
        setIsAscending(!isAscending)
        sortTable({results, setResults, sortByColumn, dataType, isAscending})
    }

    return (
        <span className="sort-icon" onClick={handleClick}>

        </span>
    )
}

HeaderRow.Group = ({children}: IChildren) => {
    return <Group>{children}</Group>
}

export default HeaderRow
/*

            {(activeColumn !== sortByColumn || activeColumn === "") && <FontAwesomeIcon icon={faSort} />}

            {activeColumn === sortByColumn && !isAscending && <FontAwesomeIcon icon={faSortAsc} />}

            {activeColumn === sortByColumn && isAscending && <FontAwesomeIcon icon={faSortDesc} />}

*/
