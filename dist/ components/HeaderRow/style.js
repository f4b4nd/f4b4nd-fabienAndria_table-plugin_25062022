"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = exports.Cell = exports.Container = void 0;
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
        
        color: ${constants_1.COLORS.darkGrey};

        svg {
            cursor: pointer;
        }

    }
    
`;
exports.Group = styled_components_1.default.thead `
`;
