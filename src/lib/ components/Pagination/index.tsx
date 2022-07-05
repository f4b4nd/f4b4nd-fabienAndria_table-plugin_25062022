import { Container, Inner, Page, PageItems, LeftArrow, RightArrow } from "./style"

const Pagination = ({activePage, setActivePage, pagesCount}: IPagination) => {

    const pages = Array.from(Array(pagesCount).keys()).map((_, idx) => idx+1)

    const handleClickOnPage = (e: React.MouseEvent<HTMLElement>) => {
        const newActivePageStr: string = (e.target as any).textContent
        const newActivePage = parseInt(newActivePageStr)
        if (newActivePage && newActivePage !== activePage) {
            setActivePage(newActivePage)
        }
    }

    const handleClickLeftArrow = (activePage: number) => {
        if (activePage > 1) {
            setActivePage(activePage - 1)
        }
    }

    const handleClickRightArrow = (activePage: number, pagesCount: number) => {
        if (activePage < pagesCount) {
            setActivePage(activePage + 1)
        }
    }

    return (
        <Container>

            <Inner >

                <LeftArrow  
                    isVisible={activePage > 1}
                    onClick={() => handleClickLeftArrow(activePage)} 
                >
                    {"<<"}
                </LeftArrow>
                

                    <PageItems>
                        {pages.map((page) => (
                            <Page
                                key={page}
                                isActive={page === activePage}
                                onClick={handleClickOnPage}
                            >
                                {page}
                            </Page>
                        ))}
                    </PageItems>
                
                <RightArrow 
                    isVisible={activePage < pagesCount}
                    onClick={() => handleClickRightArrow(activePage, pagesCount)} 
                > 
                    {">>"}
                </RightArrow>
                
            </Inner>

        </Container>
    )
}

export default Pagination