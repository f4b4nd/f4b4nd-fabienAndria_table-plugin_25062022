"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const dataTypes_1 = __importDefault(require("../../helpers/dataTypes"));
const style_1 = require("./style");
const HeaderRow_1 = __importDefault(require("../HeaderRow"));
const DataRow_1 = __importDefault(require("../DataRow"));
const Table = ({ results, setResults }) => {
    const dataTypes = (0, react_1.useMemo)(() => {
        return (0, dataTypes_1.default)(results);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return ((0, jsx_runtime_1.jsxs)(style_1.Container, { children: [(0, jsx_runtime_1.jsx)(HeaderRow_1.default.Group, { children: (0, jsx_runtime_1.jsx)(HeaderRow_1.default, { dataTypes: dataTypes, results: results, setResults: setResults }) }), results.length > 0 &&
                (0, jsx_runtime_1.jsx)(DataRow_1.default.Group, { children: results.map((item, idx) => ((0, jsx_runtime_1.jsx)(DataRow_1.default, { rowData: item, isColored: idx % 2 === 0 }, idx))) })] }));
};
exports.default = Table;
