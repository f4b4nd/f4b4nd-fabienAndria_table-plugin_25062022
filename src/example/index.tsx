import { TableWrapper } from "../lib"

import JSONData from './fixtures/employees.json'
//import EmptyJSONData from './fixtures/emptyEmployees.json'

export default function TableExample () {

    const initialData = JSONData.slice(0, 150)
    //const initialData = EmptyJSONData
    
    return (

        <TableWrapper initialData={initialData} />

    )
}