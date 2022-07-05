"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryTable = (data, query) => {
    const filterRow = (row) => {
        const rowData = Object.values(row);
        return rowData.some((item) => {
            if (item && typeof item === 'string') {
                const itemLoweCase = item.toLocaleLowerCase();
                const queryLoweCase = query.toLocaleLowerCase();
                return itemLoweCase.includes(queryLoweCase);
            }
            return false;
        });
    };
    const results = data.filter(row => filterRow(row));
    return results;
};
exports.default = queryTable;
