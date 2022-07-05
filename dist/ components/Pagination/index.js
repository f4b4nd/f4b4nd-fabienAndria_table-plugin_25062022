"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const style_1 = require("./style");
const Pagination = ({ activePage, setActivePage, pagesCount }) => {
    const pages = Array.from(Array(pagesCount).keys()).map((_, idx) => idx + 1);
    const handleClickOnPage = (e) => {
        const newActivePageStr = e.target.textContent;
        const newActivePage = parseInt(newActivePageStr);
        if (newActivePage && newActivePage !== activePage) {
            setActivePage(newActivePage);
        }
    };
    const handleClickLeftArrow = (activePage) => {
        if (activePage > 1) {
            setActivePage(activePage - 1);
        }
    };
    const handleClickRightArrow = (activePage, pagesCount) => {
        if (activePage < pagesCount) {
            setActivePage(activePage + 1);
        }
    };
    return ((0, jsx_runtime_1.jsx)(style_1.Container, { children: (0, jsx_runtime_1.jsxs)(style_1.Inner, { children: [(0, jsx_runtime_1.jsx)(style_1.LeftArrow, { isVisible: activePage > 1, onClick: () => handleClickLeftArrow(activePage), children: "<<" }), (0, jsx_runtime_1.jsx)(style_1.PageItems, { children: pages.map((page) => ((0, jsx_runtime_1.jsx)(style_1.Page, { isActive: page === activePage, onClick: handleClickOnPage, children: page }, page))) }), (0, jsx_runtime_1.jsx)(style_1.RightArrow, { isVisible: activePage < pagesCount, onClick: () => handleClickRightArrow(activePage, pagesCount), children: ">>" })] }) }));
};
exports.default = Pagination;
