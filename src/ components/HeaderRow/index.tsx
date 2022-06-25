import { Container, Cell, Group } from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { tableSelector } from "../../store/tableSelector"
import { useCallback } from "react"
import { sortTableAction } from "../../store/tableActions"

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
    return <Cell>{data} <HeaderRow.SortIcon/></Cell>
}

HeaderRow.SortIcon = function SortIcon () {

    const tableStore = useSelector(tableSelector)
    const dispatch = useDispatch()

    const sortTable = useCallback((table: Ttable) => {
        dispatch(sortTableAction(table))
    }, [dispatch])

    return (
        <span onClick={() => sortTable(tableStore)}>
            <FontAwesomeIcon icon={faSort} />
        </span>
    )
}

HeaderRow.Group = ({children}: IChildren) => {
    return <Group>{children}</Group>
}

export default HeaderRow