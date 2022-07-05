"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSort, faSortAsc, faSortDesc } from "@fortawesome/free-solid-svg-icons"
const sortTable_1 = __importDefault(require("../../helpers/sortTable"));
const style_1 = require("./style");
const HeaderRow = ({ dataTypes, results, setResults }) => {
    const colNames = Object.keys(dataTypes);
    const [activeColumn, setActiveColumn] = (0, react_1.useState)("");
    return ((0, jsx_runtime_1.jsx)(style_1.Container, { children: colNames.map((colName, idx) => ((0, jsx_runtime_1.jsx)(HeaderRow.Cell, { data: colName, children: (0, jsx_runtime_1.jsx)(HeaderRow.SortIcon, { results: results, setResults: setResults, sortByColumn: colName, dataType: dataTypes[colName], activeColumn: activeColumn, setActiveColumn: setActiveColumn }) }, idx))) }));
};
HeaderRow.Cell = ({ data, children }) => {
    return ((0, jsx_runtime_1.jsxs)(style_1.Cell, { children: [(0, jsx_runtime_1.jsx)("span", { children: data }), children] }));
};
HeaderRow.SortIcon = function SortIcon({ sortByColumn, dataType, activeColumn, setActiveColumn, results, setResults }) {
    const [isAscending, setIsAscending] = (0, react_1.useState)(true);
    const handleClick = () => {
        setActiveColumn(sortByColumn);
        setIsAscending(!isAscending);
        (0, sortTable_1.default)({ results, setResults, sortByColumn, dataType, isAscending });
    };
    return ((0, jsx_runtime_1.jsx)("span", { className: "sort-icon", onClick: handleClick }));
};
HeaderRow.Group = ({ children }) => {
    return (0, jsx_runtime_1.jsx)(style_1.Group, { children: children });
};
exports.default = HeaderRow;
