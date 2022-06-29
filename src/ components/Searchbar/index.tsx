import { Container, Input, Label } from "./style"

const Searchbar = () => {

    return (
        <Container>
            <Label>
                Search :
                <Searchbar.Input/>
            </Label>
        </Container>
    )
}

Searchbar.Input = ({...restProps}: ISearchbarInput) => {
    return <Input {...restProps} />
}

Searchbar.Label = ({children}: ISearchbarLabel) => {
    return <Label>{children}</Label>
}


export default Searchbar