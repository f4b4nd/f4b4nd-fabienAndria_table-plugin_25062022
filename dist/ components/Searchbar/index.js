"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const style_1 = require("./style");
const queryTable_1 = __importDefault(require("../../helpers/queryTable"));
const Searchbar = ({ initialData, setResults }) => {
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const queryResults = (0, queryTable_1.default)(initialData, inputValue);
        setResults(queryResults);
    };
    return ((0, jsx_runtime_1.jsx)(style_1.Container, { children: (0, jsx_runtime_1.jsxs)(style_1.Label, { children: ["Search :", (0, jsx_runtime_1.jsx)(style_1.Input, { onChange: handleInputChange })] }) }));
};
Searchbar.Label = ({ children }) => {
    return (0, jsx_runtime_1.jsx)(style_1.Label, { children: children });
};
exports.default = Searchbar;
