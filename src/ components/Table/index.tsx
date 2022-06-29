import { useMemo } from "react"
import { Container } from "./style"

import HeaderRow from "../HeaderRow"
import DataRow from "../DataRow"
import getDataTypes from "../../helpers/dataTypes"

const Table = ({results, setResults}: ITable) => {

    const dataTypes = useMemo(() => {
        return getDataTypes(results)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return (
        <Container>

            {results.length > 0 &&
                <>

                <HeaderRow.Group>
                    <HeaderRow dataTypes={dataTypes} results={results} setResults={setResults} />
                </HeaderRow.Group>
            
                <DataRow.Group>
                    {results.map((item, idx) => (
                        <DataRow 
                            key={idx} 
                            rowData={item}
                            isColored={idx % 2 === 0}
                        />
                    ))}
                </DataRow.Group>
                
                </>
            }

        </Container>
    )
}

export default Table
