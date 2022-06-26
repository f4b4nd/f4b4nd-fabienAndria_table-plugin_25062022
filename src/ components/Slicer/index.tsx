import { Container, Select, Text } from "./style"

const Slicer = ({children}: ISlicer) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

Slicer.Select = ({children, ...restProps}: ISlicerSelect) => {
    return (
        <Select {...restProps}>
            {children}
        </Select>
    )
}

Slicer.SelectOption = ({children,  ...restProps}: ISlicerSelectOption) => {
    return (
        <option {...restProps}>{children}</option>
    )
}

Slicer.Text = ({children}: ISlicerText) => {
    return (
        <Text>
            {children}
        </Text>
    )
}


export default Slicer