import { Container, Inner, Page, PageItems, LeftArrow, RightArrow } from "./style"

const Pagination = ({activePage, setActivePage}: IPagination) => {

    const maxPagesDisplayed = 10

    const pagesCount = Array.from(Array(5).keys()).map((_, idx) => idx+1)

    const handleClickOnPage = (e: React.MouseEvent<HTMLElement>) => {
        const newPageStr: string = (e.target as any).textContent
        const newPage = parseInt(newPageStr)
        if (newPage && newPage !== activePage) {
            setActivePage(newPage)
        }
    }

    const handleClickLeftArrow = (activePage: number) => {
        if (activePage > 1) {
            setActivePage(activePage-1)
        }
    }

    const handleClickRightArrow = (activePage: number, maxPagesCount: number) => {
        if (activePage < maxPagesCount) {
            setActivePage(activePage+1)
        }
    }

    return (
        <Container>

            <Inner >

                <LeftArrow onClick={() => handleClickLeftArrow(activePage)} >
                    {"<<"}
                </LeftArrow>

                    <PageItems>
                        {pagesCount.map((page, idx) => (
                            <Page
                                key={idx}
                                isActive={page === activePage}
                                onClick={handleClickOnPage}
                            >
                                {page}
                            </Page>
                        ))}
                    </PageItems>
                
                <RightArrow onClick={() => handleClickRightArrow(activePage, pagesCount.length)} > 
                    {">>"}
                </RightArrow>

            </Inner>

        </Container>
    )
}

export default Pagination