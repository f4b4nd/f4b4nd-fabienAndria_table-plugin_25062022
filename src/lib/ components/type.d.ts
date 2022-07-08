interface IChildren {
    children?: React.ReactNode
}

interface RestProps {
    [key: string]: any,
}

interface DefaultObject<T> {
    [key: string]: T
}

type Tdata = string | number | null

type TtableRow = DefaultObject<Tdata>

type Ttable = TtableRow[]

/**
 * TABLE WRAPPER
 */
 interface ITableWrapper {
    initialData: Ttable,
}

/**
 * TABLE
 */
interface ITable {
    results: Ttable,
    setResults: React.Dispatch<React.SetStateAction<Ttable>>,
}

/**
 * HEADER ROW
 */
interface IHeaderRow {
    dataTypes: DefaultObject<string>,
    results: Ttable,
    setResults: React.Dispatch<React.SetStateAction<Ttable>>
}

interface IHeaderRowCell {
    data: string,
    children: React.ReactNode,
}

interface IHeaderRowSortIcon {
    sortByColumn: string,
    dataType: string,
    activeColumn: string,
    setActiveColumn: React.Dispatch<React.SetStateAction<string>>,
    results: Ttable,
    setResults: React.Dispatch<React.SetStateAction<Ttable>>
}

/**
 * DATA ROW
 */
interface IDataRow {
    rowData: TtableRow,
    isColored: boolean,
}

interface IDataRowCell {
    data: Tdata
}

/**
 * SLICER
 */

interface ISlicer {
    children?: React.ReactNode
}

interface ISlicerSelect extends RestProps {
    setRowsPerPage: React.Dispatch<React.SetStateAction<number | "all">>
    children?: React.ReactNode
}

interface ISlicerSelectOption extends RestProps {
    children?: React.ReactNode
}

interface ISlicerLabel {
    children?: React.ReactNode
}

/**
 * SEARCHBAR
 */

interface ISearchbar {
    initialData: Ttable,
    setResults: React.Dispatch<React.SetStateAction<Ttable>>
}


interface ISearchbarLabel {
    children?: React.ReactNode
}

/**
 * PAGINATION
 */

interface IPagination {
    activePage: number,
    setActivePage: React.Dispatch<React.SetStateAction<number>>,
    pagesCount: number,
}

interface IPaginationPage {
    children?: React.ReactNode,
}

/**
 * ROW COUNTER
*/

interface IRowCounter {
    startRow: number,
    endRow: number,
    maxEntries: number,
    tableIsEmpty: boolean,
}