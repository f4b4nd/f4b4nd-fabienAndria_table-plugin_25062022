"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const style_1 = require("./style");
const RowCounter = ({ startRow, endRow, maxEntries, tableIsEmpty }) => {
    return ((0, jsx_runtime_1.jsxs)(style_1.Container, { children: [!tableIsEmpty &&
                (0, jsx_runtime_1.jsxs)(style_1.Text, { children: ["Showing ", startRow, " to ", endRow, " of  ", maxEntries, " entries"] }), tableIsEmpty &&
                (0, jsx_runtime_1.jsx)(style_1.Text, { children: "Showing 0 to 0 of 0 entries " })] }));
};
exports.default = RowCounter;
