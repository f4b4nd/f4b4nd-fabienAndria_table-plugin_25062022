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
    return <Cell>{data}</Cell>
}

HeaderRow.Group = ({children}: IChildren) => {
    return <Group>{children}</Group>
}

export default HeaderRow