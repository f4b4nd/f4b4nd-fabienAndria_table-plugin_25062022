import styled from "styled-components"
import { COLORS } from "../../constants"

export const Container = styled.tr`
    border-bottom: 1px solid ${COLORS.lightGrey};

    &:hover {
        background-color: ${COLORS.grey};
    }
`

export const Cell = styled.td`
    padding: 0.5em 0;
`

export const Group = styled.tbody``