"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Slicer_1 = __importDefault(require("../ components/Slicer"));
const SlicerContainer = ({ setRowsPerPage }) => {
    return ((0, jsx_runtime_1.jsx)(Slicer_1.default, { children: (0, jsx_runtime_1.jsxs)(Slicer_1.default.Label, { children: ["Show", (0, jsx_runtime_1.jsxs)(Slicer_1.default.Select, { defaultValue: "all", setRowsPerPage: setRowsPerPage, children: [(0, jsx_runtime_1.jsx)(Slicer_1.default.SelectOption, { value: 10, children: "10" }), (0, jsx_runtime_1.jsx)(Slicer_1.default.SelectOption, { value: 25, children: "25" }), (0, jsx_runtime_1.jsx)(Slicer_1.default.SelectOption, { value: 50, children: "50" }), (0, jsx_runtime_1.jsx)(Slicer_1.default.SelectOption, { value: 100, children: "100" }), (0, jsx_runtime_1.jsx)(Slicer_1.default.SelectOption, { value: "all", children: "All" })] }), "entries"] }) }));
};
exports.default = SlicerContainer;
