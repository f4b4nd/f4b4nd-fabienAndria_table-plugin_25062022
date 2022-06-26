import { useMemo } from "react"
import { Container } from "./style"

import HeaderRow from "../HeaderRow"
import DataRow from "../DataRow"
import getDataTypes from "../../helpers/dataTypes"

const Table = ({data}: ITable) => {

    const dataTypes = useMemo(() => {
        return getDataTypes(data)
    }, [data])

    return (
        <Container>

            {data.length > 0 &&
                <>

                <HeaderRow.Group>
                    <HeaderRow dataTypes={dataTypes} />
                </HeaderRow.Group>
            
                <DataRow.Group>
                    {data.map((item, idx) => (
                        <DataRow 
                            key={idx} 
                            rowData={item}
                        />
                    ))}
                </DataRow.Group>
                
                </>
            }

        </Container>
    )
}

export default Table
