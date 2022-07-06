"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.Group = exports.Cell = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const constants_1 = require("../../constants");
exports.Container = styled_components_1.default.tr `
    border-bottom: 1.3px solid black;
`;
exports.Cell = styled_components_1.default.th `

    font-weight: bold;
    font-size: 1rem;

    padding: 0.5em 15px 0.5em 0;
    text-align: center;

    position: relative;

    .sort-icon {
        position: absolute;
        right: 6px;
    }
    
`;
exports.Group = styled_components_1.default.thead `
`;
exports.Icon = styled_components_1.default.img `

    cursor: pointer;
    filter: opacity(0.2) drop-shadow(0 0 0 ${constants_1.COLORS.darkGrey});

    height: 14px;
    width: 12px;

    &.descending-sort {
        height: 10px;
        width: 10px;
        transform: translateY(-5px);
    }

    &.ascending-sort {
        height: 10px;
        width: 10px;
        transform: translateY(3px);
    }
`;
