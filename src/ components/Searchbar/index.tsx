import { Container, Input, Label } from "./style"

const Searchbar = ({setInputValue}: ISearchbar) => {

    return (
        <Container>
            <Label>
                Search :
                <Searchbar.Input setInputValue={setInputValue} />
            </Label>
        </Container>
    )
}

Searchbar.Input = ({setInputValue}: ISearchbarInput) => {
    return <Input onChange={(e) => setInputValue(e.target.value)} />
}

Searchbar.Label = ({children}: ISearchbarLabel) => {
    return <Label>{children}</Label>
}


export default Searchbar