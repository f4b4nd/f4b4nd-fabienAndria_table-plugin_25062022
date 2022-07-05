"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightArrow = exports.LeftArrow = exports.PageItems = exports.Page = exports.Inner = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const colors_1 = require("../../constants/colors");
exports.Container = styled_components_1.default.div `
    margin: 1em 0;
    display: flex;
    justify-content: flex-end;
`;
exports.Inner = styled_components_1.default.div `
    display: flex;
    align-items: center;
    column-gap: 0.5em;
`;
exports.Page = styled_components_1.default.div `
    font-size: 1em;
    padding: 0.5em;
    border-radius: 2px;

    ${({ isActive }) => isActive && `background: ${colors_1.COLORS.linearGradientGrey};`}
    ${({ isActive }) => isActive && `border: 1px solid ${colors_1.COLORS.darkGrey};`}
    ${({ isActive }) => !isActive && 'cursor: pointer;'}

    &:hover {
        ${({ isActive }) => !isActive && 'color: white;'}
        ${({ isActive }) => !isActive && 'background-color: black;'}
    }
`;
exports.PageItems = styled_components_1.default.div `
    display: flex;
    column-gap: 0.5em;
`;
exports.LeftArrow = styled_components_1.default.div `
    font-weight: bold;
    cursor: pointer;

    ${({ isVisible }) => !isVisible && 'visibility: hidden;'}
`;
exports.RightArrow = styled_components_1.default.div `
    font-weight: bold;
    cursor: pointer;
    ${({ isVisible }) => !isVisible && 'visibility: hidden;'}
`;
