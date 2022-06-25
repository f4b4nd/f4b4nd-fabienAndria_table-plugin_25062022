import { useState, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from "@fortawesome/free-solid-svg-icons"

import { tableSelector } from "../../store/tableSelector"
import { sortTableAction } from "../../store/tableActions"

import { Container, Cell, Group } from "./style"

const HeaderRow = ({rowData}: IHeaderRow) => {
    return (
        <Container>
            {rowData.map((item, idx)=> (
                <HeaderRow.Cell
                    key={idx} 
                    data={item} 
                />
            ))}
        </Container>
    )
}

HeaderRow.Cell = ({data}: IHeaderRowCell) => {
    return <Cell>{data} <HeaderRow.SortIcon sortByColumn={data}/></Cell>
}

HeaderRow.SortIcon = function SortIcon ({sortByColumn}: {sortByColumn: string}) {

    const tableStore = useSelector(tableSelector)
    const dispatch = useDispatch()

    const sortTable = useCallback((table: Ttable, sortByColumn: string, isAscending: boolean) => {
        dispatch(sortTableAction(table, sortByColumn, isAscending))
    }, [dispatch])

    const [isAscending, setIsAscending] = useState<boolean>(true)

    const handleClick = () => {
        setIsAscending(!isAscending)
        sortTable(tableStore, sortByColumn, isAscending)
    }
    
    return (
        <span onClick={handleClick}>
            <FontAwesomeIcon icon={faSort} />
        </span>
    )
}

HeaderRow.Group = ({children}: IChildren) => {
    return <Group>{children}</Group>
}

export default HeaderRow