import { Container } from "./style"

const RowCounter = ({startRow, endRow, maxEntries}: IRowCounter) => {
    return (
        <Container>
            Showing {startRow} to {endRow} of  {maxEntries} entries
        </Container>
    )
}

export default RowCounter