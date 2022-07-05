"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const style_1 = require("./style");
const DataRow = ({ rowData, isColored }) => {
    const values = Object.values(rowData);
    return ((0, jsx_runtime_1.jsx)(style_1.Container, { isColored: isColored, children: values.map((item, idx) => ((0, jsx_runtime_1.jsx)(DataRow.Cell, { data: item }, idx))) }));
};
DataRow.Cell = ({ data }) => {
    return (0, jsx_runtime_1.jsx)(style_1.Cell, { children: data });
};
DataRow.Group = ({ children }) => {
    return (0, jsx_runtime_1.jsx)(style_1.Group, { children: children });
};
exports.default = DataRow;
