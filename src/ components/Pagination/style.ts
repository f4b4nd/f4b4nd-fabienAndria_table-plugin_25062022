import styled from "styled-components"

interface Props {
    isActive?: boolean,
}

export const Container = styled.div`
    margin: 1em 0;
    display: flex;
    justify-content: flex-end;
`

export const Inner = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5em;
`

export const Page = styled.div<Props>`
    font-size: 1em;
    padding: 0.5em;
    cursor: pointer;

    ${({isActive}) => isActive && 'border: 1px solid red'}
`

export const PageItems = styled.div`
    display: flex;
    column-gap: 0.5em;
`

export const LeftArrow = styled.div`
    cursor: pointer;
`

export const RightArrow = styled.div`
    cursor: pointer;
`