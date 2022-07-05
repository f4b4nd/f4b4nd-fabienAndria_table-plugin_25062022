"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = void 0;
const isDate = (datestr) => {
    return !isNaN(new Date(datestr).getDate());
};
exports.isDate = isDate;
