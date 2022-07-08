"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const style_1 = require("./style");
const dataPerPage_1 = __importDefault(require("../../helpers/dataPerPage"));
const isEmptyData_1 = require("../../helpers/isEmptyData");
const Table_1 = __importDefault(require("../Table"));
const slicer_1 = __importDefault(require("../../containers/slicer"));
const Searchbar_1 = __importDefault(require("../Searchbar"));
const Pagination_1 = __importDefault(require("../Pagination"));
const RowCounter_1 = __importDefault(require("../RowCounter"));
function TableWrapper({ initialData }) {
    const [results, setResults] = (0, react_1.useState)(initialData);
    const [rowsPerPage, setRowsPerPage] = (0, react_1.useState)("all");
    const [activePage, setActivePage] = (0, react_1.useState)(1);
    const [pagesCount, setPagesCount] = (0, react_1.useState)(0);
    const [rangeOfActivePageResults, setRangeOfActivePageResults] = (0, react_1.useState)({ startRow: 0, endRow: initialData.length });
    const activePageResults = results.slice(rangeOfActivePageResults.startRow, rangeOfActivePageResults.endRow);
    (0, react_1.useEffect)(() => {
        const [startRow, endRow] = (0, dataPerPage_1.default)(activePage, results.length, rowsPerPage);
        setRangeOfActivePageResults({ startRow, endRow });
        const hasMultiplePages = results.length > 0 && rowsPerPage !== "all";
        const newPagesCount = hasMultiplePages ? Math.ceil(results.length / rowsPerPage) : 1;
        setPagesCount(newPagesCount);
    }, [activePage, results, rowsPerPage]);
    (0, react_1.useEffect)(() => {
        setActivePage(1);
    }, [results, rowsPerPage]);
    return ((0, jsx_runtime_1.jsxs)(style_1.Container, { className: "table-container", children: [(0, jsx_runtime_1.jsxs)(style_1.Row, { className: "row", children: [(0, jsx_runtime_1.jsx)(slicer_1.default, { setRowsPerPage: setRowsPerPage }), (0, jsx_runtime_1.jsx)(Searchbar_1.default, { initialData: initialData, setResults: setResults })] }), (0, jsx_runtime_1.jsx)(Table_1.default, { results: activePageResults, setResults: setResults }), (0, jsx_runtime_1.jsxs)(style_1.Row, { className: "row", children: [(0, jsx_runtime_1.jsx)(RowCounter_1.default, { startRow: 1 + rangeOfActivePageResults.startRow, endRow: rangeOfActivePageResults.endRow, maxEntries: results.length, tableIsEmpty: (0, isEmptyData_1.tableIsEmpty)(results) }), (0, jsx_runtime_1.jsx)(Pagination_1.default, { activePage: activePage, setActivePage: setActivePage, pagesCount: pagesCount })] })] }));
}
exports.TableWrapper = TableWrapper;
