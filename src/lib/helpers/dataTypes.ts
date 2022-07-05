import { isDate } from "./date"

/** Gets data type for each column */
const getDataTypes = (data: Ttable) => {

    if (data.length <=0) return {}

    const colNames: string[] = Object.keys(data[0])

    const dataTypes = colNames.reduce((acc, colName) => {

        const columnData = data.map(item => item[colName])

        const dataType = {[colName]: getDataTypeFromColumn(columnData)}

        return {...acc, ...dataType}

    }, {})

    return dataTypes

}

export default getDataTypes


const getDataTypeFromColumn = (columnData: Tdata[]): string => {

    const defaultType = 'string'
    const maxIterations = 20

    let index: number = 0
    let dataType: string = ""

    while (dataType === "" && index < maxIterations) {

        const item: Tdata = columnData[index]

        if (!item) {
            index++
            continue
        }

        if (typeof item === 'number')  dataType = 'number'
        
        if (isDate(`${item}`))  dataType = 'date'
    
        const typeIsValid = typeof item !== 'object'

        if (typeIsValid)  dataType = typeof item
        
        index++

    }

    return dataType !== "" ? dataType : defaultType

}
