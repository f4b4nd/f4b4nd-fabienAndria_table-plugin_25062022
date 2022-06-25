import { useState, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortAsc, faSortDesc } from "@fortawesome/free-solid-svg-icons"

import { tableSelector } from "../../store/tableSelector"
import { sortTableAction } from "../../store/tableActions"

import { Container, Cell, Group } from "./style"

const HeaderRow = ({rowData}: IHeaderRow) => {

    const [activeColumn, setActiveColumn] = useState<string>("")

    return (
        <Container>
            {rowData.map((item, idx)=> (
                <HeaderRow.Cell
                    key={idx} 
                    data={item}
                    activeColumn={activeColumn}
                    setActiveColumn={setActiveColumn}
                />
            ))}
        </Container>
    )

}

HeaderRow.Cell = ({data, activeColumn, setActiveColumn}: IHeaderRowCell) => {
    return <Cell>
        {data} 
        <HeaderRow.SortIcon 
            sortByColumn={data}
            activeColumn={activeColumn}
            setActiveColumn={setActiveColumn}
        />
    </Cell>
}

HeaderRow.SortIcon = function SortIcon ({sortByColumn, activeColumn, setActiveColumn}: IHeaderRowSortIcon) {

    const tableStore = useSelector(tableSelector)
    const dispatch = useDispatch()

    const sortTable = useCallback((table: Ttable, sortByColumn: string, isAscending: boolean) => {
        dispatch(sortTableAction(table, sortByColumn, isAscending))
    }, [dispatch])

    const [isAscending, setIsAscending] = useState<boolean>(true)

    const handleClick = () => {
        setActiveColumn(sortByColumn)
        setIsAscending(!isAscending)
        sortTable(tableStore, sortByColumn, isAscending)
    }

    return (
        <span onClick={handleClick}>
            {(activeColumn !== sortByColumn || activeColumn === "") && <FontAwesomeIcon icon={faSort} />}
            {activeColumn === sortByColumn && !isAscending && <FontAwesomeIcon icon={faSortAsc} />}
            {activeColumn === sortByColumn && isAscending && <FontAwesomeIcon icon={faSortDesc} />}
        </span>
    )
}

HeaderRow.Group = ({children}: IChildren) => {
    return <Group>{children}</Group>
}

export default HeaderRow