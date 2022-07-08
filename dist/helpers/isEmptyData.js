"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableIsEmpty = exports.objectIsEmpty = void 0;
const objectIsEmpty = (obj) => {
    const values = Object.values(obj);
    const notNullValues = values.filter(value => value && value !== "");
    return notNullValues.length === 0;
};
exports.objectIsEmpty = objectIsEmpty;
const tableIsEmpty = (table) => {
    if (table.length === 0)
        return true;
    if (table.length === 1 && (0, exports.objectIsEmpty)(table[0]))
        return true;
    return false;
};
exports.tableIsEmpty = tableIsEmpty;
