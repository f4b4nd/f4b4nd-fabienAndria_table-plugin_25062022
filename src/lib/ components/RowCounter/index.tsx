import { Container, Text } from "./style"

const RowCounter = ({startRow, endRow, maxEntries, tableIsEmpty}: IRowCounter) => {
    return (
        <Container>

            {!tableIsEmpty && 
                <Text>Showing {startRow} to {endRow} of  {maxEntries} entries</Text>
            }

            {tableIsEmpty && 
                <Text>Showing 0 to 0 of 0 entries </Text>
            }

        </Container>
    )
}

export default RowCounter