import { useState } from "react"

import SortIconPNG from "../../assets/sort.png"
import AscendingSortIconPNG from "../../assets/sort-asc.png"
import DescendingSortIconPNG from "../../assets/sort-desc.png"

import sortTable from "../../helpers/sortTable"

import { Container, Cell, Group, Icon } from "./style"


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
        
            {(activeColumn !== sortByColumn || activeColumn === "") && <Icon src={SortIconPNG} alt="sort" className="sort" /> }

            {activeColumn === sortByColumn && !isAscending && <Icon src={DescendingSortIconPNG} alt="descending-sort" className="descending-sort" /> }

            {activeColumn === sortByColumn && isAscending && <Icon src={AscendingSortIconPNG} alt="ascending-sort" className="ascending-sort" /> }

        </span>
    )
}

HeaderRow.Group = ({children}: IChildren) => {
    return <Group>{children}</Group>
}

export default HeaderRow

