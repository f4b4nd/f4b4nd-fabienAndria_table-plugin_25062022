interface IChildren {
    children?: React.ReactNode
}

interface DefaultObject<T> {
    [key: string]: T
}

type Tdata = string | number | null

type TtableRow = DefaultObject<Tdata>

type Ttable = TtableRow[]


/**
 * TABLE
 */
interface ITable {
    data: Ttable
}

/**
 * HEADER ROW
 */
interface IHeaderRow {
    rowData: string[]
}

interface IHeaderRowCell {
    data: string,
    children: React.ReactNode,
}

interface IHeaderRowSortIcon {
    sortByColumn: string,
    activeColumn: string,
    setActiveColumn: React.Dispatch<React.SetStateAction<string>>
}

/**
 * DATA ROW
 */
interface IDataRow {
    rowData: TtableRow
}

interface IDataRowCell {
    data: Tdata
}
