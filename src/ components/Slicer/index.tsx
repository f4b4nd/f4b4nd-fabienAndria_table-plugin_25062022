import { useState, useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { displaySlicedTableAction } from "../../store/tableActions"

import { tableSelector } from "../../store/tableSelector"

import { Container, Select, Text } from "./style"


const Slicer = ({children}: ISlicer) => {

    return (
        <Container>
            {children}
        </Container>
    )
}

Slicer.Select = function SlicerSelect ({children, ...restProps}: ISlicerSelect) {

    const [maxTableRows, setMaxTableRows] = useState<string>("")

    const tableStore = useSelector(tableSelector)
    const dispatch = useDispatch()

    const displaySlicedTable = useCallback((table: Ttable, maxTableRows: string) => {
        dispatch(displaySlicedTableAction(table, maxTableRows))
    }, [dispatch])

    useEffect(() => {
        displaySlicedTable(tableStore, maxTableRows)
        //console.log('newlim', limitTableRows)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [maxTableRows])

    return (
        <Select
            {...restProps}
            onChange={(e) => {
                setMaxTableRows(e.target.value)
            }}
        >
            {children}
        </Select>
    )
}

Slicer.SelectOption = ({children,  ...restProps}: ISlicerSelectOption) => {
    return (
        <option {...restProps}>
            {children}
        </option>
    )
}

Slicer.Text = ({children}: ISlicerText) => {
    return (
        <Text>
            {children}
        </Text>
    )
}


export default Slicer