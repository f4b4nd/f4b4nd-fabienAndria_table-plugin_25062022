"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const style_1 = require("./style");
const Slicer = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(style_1.Container, { children: children }));
};
Slicer.Select = function SlicerSelect({ setRowsPerPage, children, ...restProps }) {
    return ((0, jsx_runtime_1.jsx)(style_1.Select, { ...restProps, onChange: (e) => {
            const value = e.target.value;
            const rowsPerPage = value === "all" ? "all" : parseInt(value);
            setRowsPerPage(rowsPerPage);
        }, children: children }));
};
Slicer.SelectOption = ({ children, ...restProps }) => {
    return ((0, jsx_runtime_1.jsx)("option", { ...restProps, children: children }));
};
Slicer.Label = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(style_1.Label, { children: children }));
};
exports.default = Slicer;
