import styled from "styled-components"
import { COLORS } from "../../constants"

interface Props {
    isColored: boolean
}

export const Container = styled.tr<Props>`

    background-color: ${({isColored}) => isColored ? COLORS.lightGrey: 'white'};

    border-bottom: 1px solid ${COLORS.grey};

    &:hover {
        background-color: ${COLORS.grey};
    }
`

export const Cell = styled.td`
    padding: 0.5em 0;
`

export const Group = styled.tbody``