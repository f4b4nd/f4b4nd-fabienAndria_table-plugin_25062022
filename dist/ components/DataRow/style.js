"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = exports.Cell = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const constants_1 = require("../../constants");
exports.Container = styled_components_1.default.tr `

    background-color: ${({ isColored }) => isColored ? constants_1.COLORS.lightGrey : 'white'};

    border-bottom: 1px solid ${constants_1.COLORS.grey};

    &:hover {
        background-color: ${constants_1.COLORS.grey};
    }
`;
exports.Cell = styled_components_1.default.td `
    padding: 0.5em 0;
`;
exports.Group = styled_components_1.default.tbody ``;
