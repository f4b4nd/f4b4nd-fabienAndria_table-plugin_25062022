import { isDate } from "./date"

/** Gets data type for each column, using a sample array of 10 lines */
const getDataTypes = (data: Ttable) => {

    if (data.length <=0) return {}

    const limitSampleSize = 10
    const maxSampleSize = data.length < limitSampleSize ? data.length : limitSampleSize
    
    const sampleData = data.slice(0, maxSampleSize)

    const colNames: string[] = Object.keys(sampleData[0])

    const dataTypes = colNames.reduce((acc, colName) => {
        const columnData = sampleData.map(item => item.colName)
        const datatypeMatch = {[colName]: getDataTypeFromColumn(columnData)}
        return {...acc, ...datatypeMatch}
    }, {})

    return dataTypes

}

export default getDataTypes


const getDataTypeFromColumn = (columnData: Tdata[]): string => {

    const defaultType = 'string'

    const dataType: string = columnData.reduce((acc: string, item) => {

        if (!item) return ""

        if (typeof item === 'number') return 'number'

        if (isDate(`${item}`)) return 'date'

        const hasMatched = typeof item !== 'object'

        if (acc === "" && hasMatched) {
            return typeof item
        }

        return acc
    
    }, "")

    return dataType !== "" ? dataType : defaultType

}
