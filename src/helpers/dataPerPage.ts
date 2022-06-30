const getRangeDataRowByPage = (page: number, tableLength: number, rowsPerPageString: string) => {
    
    let startRow: number
    let endRow : number

    const rowsPerPage = parseInt(rowsPerPageString)

    if (!rowsPerPage) {
        startRow = 0
        endRow = tableLength
        return [startRow, endRow]
    }

    if (tableLength < 1 || rowsPerPage < 1) {
        startRow = 0
        endRow = 0
        return [startRow, endRow]
    }

    startRow = (page -1) * rowsPerPage + 1

    endRow = page * rowsPerPage

    // endRow should always be smaller than tableLength (e.g. for last page)
    if (endRow > tableLength) {
        endRow = tableLength
    }

    return [startRow, endRow]

}

export default getRangeDataRowByPage