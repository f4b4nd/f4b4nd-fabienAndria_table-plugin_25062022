/**
 * SORT TABLE
 */
interface IsortTable {
    sortByColumn: string, 
    dataType: string, 
    isAscending: boolean,

    results: Ttable, 
    setResults: React.Dispatch<React.SetStateAction<Ttable>>
}

/**
 * QUERY TABLE
 */

interface IqueryTable {
    (data: Ttable, query: string): Ttable
}