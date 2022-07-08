"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const style_1 = require("./style");
const RowCounter = ({ startRow, endRow, maxEntries }) => {
    return ((0, jsx_runtime_1.jsxs)(style_1.Container, { children: ["Showing ", startRow, " to ", endRow, " of  ", maxEntries, " entries"] }));
};
exports.default = RowCounter;
