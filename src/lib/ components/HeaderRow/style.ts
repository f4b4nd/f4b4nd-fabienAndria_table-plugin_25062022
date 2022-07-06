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
    }
    
`

export const Group = styled.thead`
`

export const Icon = styled.img`

    cursor: pointer;
    filter: opacity(0.2) drop-shadow(0 0 0 ${COLORS.darkGrey});

    height: 14px;
    width: 12px;

    &.descending-sort {
        height: 10px;
        width: 10px;
        transform: translateY(-5px);
    }

    &.ascending-sort {
        height: 10px;
        width: 10px;
        transform: translateY(3px);
    }
`
