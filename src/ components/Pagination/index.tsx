import { Container, Inner, Page, PageItems, LeftArrow, RightArrow } from "./style"

const Pagination = ({activePage, setActivePage}: IPagination) => {

    const maxPagesDisplayed = 10

    const pagesCount = Array.from(Array(5).keys())

    const handleClickOnPage = (e: React.MouseEvent<HTMLElement>) => {
        const newPage = (e.target as any).textContent
        setActivePage(newPage)
    }

    return (
        <Container>

            <Inner >

                <Pagination.LeftArrow />

                    <PageItems>
                        {pagesCount.map((page, idx) => (
                            <Page 
                                key={idx}
                                isActive={idx === activePage}
                                onClick={handleClickOnPage}
                            >
                                {page}
                            </Page>
                        ))}
                    </PageItems>
                
                <Pagination.RightArrow />

            </Inner>

        </Container>
    )
}

Pagination.Page = ({children}: IPaginationPage) => {
    return <Page> {children} </Page>
}

Pagination.LeftArrow = () => {
    return <LeftArrow> {"<<"} </LeftArrow>
}

Pagination.RightArrow = () => {
    return <RightArrow> {">>"} </RightArrow>
}

export default Pagination