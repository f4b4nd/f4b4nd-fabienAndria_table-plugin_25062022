import { Container, Cell, Group } from "./style"

interface IHeaderRow {
    rowData: string[]
}

interface ICell {
    data: string
}

interface IGroup {
    children?: React.ReactNode
}


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

HeaderRow.Cell = ({data}: ICell) => {
    return <Cell> {data} </Cell>
}

HeaderRow.Group = ({children}: IGroup) => {
    return <Group> {children} </Group>
}

export default HeaderRow