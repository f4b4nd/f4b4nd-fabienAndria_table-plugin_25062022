import { Container } from "./style"

import HeaderRow from "../HeaderRow"
import DataRow from "../DataRow"

interface ObjectProps {
    [key: string]: any
}

interface ITable {
    data: ObjectProps[]
}

const Table = ({data}: ITable) => {

    const headers: Array<string> = Object.keys(data[0])

    return (
        <Container>

            <HeaderRow.Group>
                <HeaderRow rowData={headers} />
            </HeaderRow.Group>

            <DataRow.Group>
                {data.map((item, idx) => (
                    <DataRow 
                        key={idx} 
                        rowData={item} 
                    />
                ))}
            </DataRow.Group>

        </Container>
    )
}

export default Table

/*

*/