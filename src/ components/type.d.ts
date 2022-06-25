interface IChildren {
    children?: React.ReactNode
}

interface ObjectProps<T> {
    [key: string]: T
}

type tCell = string | number | null

/**
 * TABLE
 */
interface ITable {
    data: ObjectProps<tCell>[]
}

/**
 * HEADEROW
 */
interface IHeaderRow {
    rowData: string[]
}

interface IHeaderRowCell {
    data: string
}

/**
 * DATAROW
 */
interface IDataRow {
    rowData: ObjectProps<tCell>
}

interface IDataRowCell {
    data: tCell
}

