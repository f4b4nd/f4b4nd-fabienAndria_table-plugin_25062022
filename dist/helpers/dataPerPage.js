"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRangeDataRowByPage = (page, tableLength, rowsPerPage) => {
    let startRow;
    let endRow;
    if (!rowsPerPage) {
        startRow = 0;
        endRow = tableLength;
        return [startRow, endRow];
    }
    if (tableLength < 1 || rowsPerPage < 1) {
        startRow = 0;
        endRow = 0;
        return [startRow, endRow];
    }
    startRow = (page - 1) * rowsPerPage;
    endRow = page * rowsPerPage;
    // endRow should always be smaller than tableLength (e.g. for last page)
    if (endRow > tableLength) {
        endRow = tableLength;
    }
    return [startRow, endRow];
};
exports.default = getRangeDataRowByPage;
