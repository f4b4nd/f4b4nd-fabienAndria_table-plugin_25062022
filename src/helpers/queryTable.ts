const queryTable: IqueryTable = (data, query) => {

    const filterRow = (row: TtableRow) => {

        const rowData = Object.values(row)

        return rowData.some((item: Tdata) => {

            if (item && typeof item === 'string') {
                const itemLoweCase = item.toLocaleLowerCase()
                const queryLoweCase = query.toLocaleLowerCase()
                return itemLoweCase.includes(queryLoweCase)
            }

            return false

        })
    }

    const results = data.filter(row => filterRow(row))

    return results

}

export default queryTable