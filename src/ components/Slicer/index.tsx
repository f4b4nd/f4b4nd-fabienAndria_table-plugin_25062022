import { Container, Select, Label } from "./style"


const Slicer = ({children}: ISlicer) => {

    return (
        <Container>
            {children}
        </Container>
    )
}

Slicer.Select = function SlicerSelect ({setMaxTableRows, children, ...restProps}: ISlicerSelect) {

    return (
        <Select
            {...restProps}
            onChange={(e) => {
                setMaxTableRows(e.target.value)
            }}
        >
            {children}
        </Select>
    )
}

Slicer.SelectOption = ({children,  ...restProps}: ISlicerSelectOption) => {
    return (
        <option {...restProps}>
            {children}
        </option>
    )
}

Slicer.Label = ({children}: ISlicerLabel) => {
    return (
        <Label>
            {children}
        </Label>
    )
}


export default Slicer