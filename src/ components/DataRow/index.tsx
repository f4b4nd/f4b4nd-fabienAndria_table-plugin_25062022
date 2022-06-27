import { Container, Cell, Group } from "./style"


const DataRow = ({rowData, isEven}: IDataRow) => {
    
    const values = Object.values(rowData)

    return (
        <Container isEven={isEven}>

            {values.map((item, idx)=> (

                <DataRow.Cell 
                    key={idx} 
                    data={item}
                />
    
            ))}
        </Container>
    )
}


DataRow.Cell = ({data}: IDataRowCell) => {
    return <Cell>{data}</Cell>
}

DataRow.Group = ({children}: IChildren) => {
    return <Group>{children}</Group>
}

export default DataRow