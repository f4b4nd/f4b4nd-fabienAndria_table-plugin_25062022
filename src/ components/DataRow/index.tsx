import { Container, Cell, Group } from "./style"

interface IDataRow {
    [key: string]: any
}

interface ICell {
    data: string | number | null
}

interface IGroup {
    children?: React.ReactNode
}

const DataRow = ({rowData}: IDataRow) => {
    
    const values: any[] = Object.values(rowData)

    return (
        <Container>
            {values.map((item, idx)=> (

                <DataRow.Cell 
                    key={idx} 
                    data={item} 
                />
    
            ))}
        </Container>
    )
}


DataRow.Cell = ({data}: ICell) => {
    return <Cell> {data} </Cell>
}

DataRow.Group = ({children}: IGroup) => {
    return <Group> {children} </Group>
}

export default DataRow