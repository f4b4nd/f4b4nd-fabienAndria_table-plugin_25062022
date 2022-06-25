import { Container } from "./style"

import HeaderRow from "../HeaderRow"
import DataRow from "../DataRow"

const Table = ({data}: ITable) => {

    const headers: string[] = data.length > 0 ? Object.keys(data[0]): []

    return (
        <Container>
            
            {headers.length > 0 &&
                <HeaderRow.Group>
                    <HeaderRow rowData={headers} />
                </HeaderRow.Group>
            }

            {data.length > 0 &&
                <DataRow.Group>
                    {data.map((item, idx) => (
                        <DataRow 
                            key={idx} 
                            rowData={item} 
                        />
                    ))}
                </DataRow.Group>
            }

        </Container>
    )
}

export default Table
