import { useMemo } from "react"
import getDataTypes from "../../helpers/dataTypes"
import { objectIsEmpty } from "../../helpers/isEmptyData"

import { Container } from "./style"

import HeaderRow from "../HeaderRow"
import DataRow from "../DataRow"

const Table = ({results, setResults}: ITable) => {

    const dataTypes = useMemo(() => {
        return getDataTypes(results)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>

            <HeaderRow.Group>
                <HeaderRow
                    dataTypes={dataTypes} 
                    results={results} 
                    setResults={setResults} 
                />
            </HeaderRow.Group>

            {results.length > 0 &&

                <DataRow.Group>
                    {results.map((item, idx) => (
                        !objectIsEmpty(item) &&
                        <DataRow 
                            key={idx} 
                            rowData={item}
                            isColored={idx % 2 === 0}
                        />
                    ))}
                </DataRow.Group>
                
            }

        </Container>
    )
}

export default Table
