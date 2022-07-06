import { TableWrapper } from "../lib"

import JSONData from './fixtures/employees.json'

export default function TableExample () {

    const initialData = JSONData.slice(0, 150)
    
    return (

        <TableWrapper initialData={initialData} />

    )
}