import { Container, Input, Label } from "./style"
import queryTable from '../../helpers/queryTable'

const Searchbar = ({initialData, setResults}: ISearchbar) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const inputValue = e.target.value
        
        const queryResults = queryTable(initialData, inputValue)
    
        setResults(queryResults)

    }

    return (
        <Container>
            <Label>
                Search :
                <Input onChange={handleInputChange} />
            </Label>
        </Container>
    )
}


Searchbar.Label = ({children}: ISearchbarLabel) => {
    return <Label>{children}</Label>
}


export default Searchbar