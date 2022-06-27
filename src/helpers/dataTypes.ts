import { isDate } from "./date"

const getDataTypes = (data: Ttable) => {

    if (data.length <=0) return {}

    const limitSampleSize = 10
    const maxSampleSize = data.length < limitSampleSize ? data.length : limitSampleSize
    
    const sampleData = data.slice(0, maxSampleSize)

    const colNames: string[] = Object.keys(sampleData[0])

    const dataTypes = colNames.reduce((acc, colName) => {
        const item = {[colName]: getType(sampleData, colName)}
        return {...acc, ...item}
    }, {})

    return dataTypes

}

export default getDataTypes

const getType = (data: TtableRow[], colName: string): string => {

    const defaultType = 'string'

    const dataType: string = data.reduce((acc, row) => {

        const item = row[colName]

        if (!item) return ""

        if (typeof item === 'number') return 'number'

        if (isDate(`${item}`)) return 'date'

        const typeMatch = typeof item === 'object' ? null : typeof item 

        if (acc === "" && typeMatch) {
            return typeMatch
        }

        return acc
    
    }, "")

    return dataType !== "" ? dataType: defaultType

}

