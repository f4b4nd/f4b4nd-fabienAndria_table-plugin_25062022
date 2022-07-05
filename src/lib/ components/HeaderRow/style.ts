import styled from "styled-components"
import { COLORS } from "../../constants"

export const Container = styled.tr`
    border-bottom: 1.3px solid black;
`

export const Cell = styled.th`

    font-weight: bold;
    font-size: 1rem;

    padding: 0.5em 15px 0.5em 0;
    text-align: center;
    position: relative;

    .sort-icon {

        position: absolute;
        right: 6px;
        
        color: ${COLORS.darkGrey};

        svg {
            cursor: pointer;
        }

    }
    
`

export const Group = styled.thead`
`