import './App.css'
import Table from './ components/Table'
import employeesData from './fixtures/employees.json'

function App() {
    return (
        <Table data={employeesData} />
    )
}

export default App
