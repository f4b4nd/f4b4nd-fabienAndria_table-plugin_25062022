"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sortTable = ({ results, setResults, sortByColumn, dataType, isAscending }) => {
    const getItemsToCompare = (a, b) => {
        const item1 = a[sortByColumn] || null;
        const item2 = b[sortByColumn] || null;
        return [item1, item2];
    };
    let sortedTable;
    switch (dataType) {
        case 'number':
            sortedTable = [...results].sort((a, b) => {
                const [item1, item2] = getItemsToCompare(a, b);
                if (!item1 || !item2)
                    return nullValuesComparison(item1, item2);
                return numericComparison(item1, item2, isAscending);
            });
            break;
        case 'date':
            sortedTable = [...results].sort((a, b) => {
                const [item1, item2] = getItemsToCompare(a, b);
                if (!item1 || !item2)
                    return nullValuesComparison(item1, item2);
                return dateStringComparison(item1, item2, isAscending);
            });
            break;
        case 'string':
            sortedTable = [...results].sort((a, b) => {
                const [item1, item2] = getItemsToCompare(a, b);
                if (!item1 || !item2)
                    return nullValuesComparison(item1, item2);
                return stringComparison(item1, item2, isAscending);
            });
            break;
        default:
            sortedTable = [...results];
            break;
    }
    setResults(sortedTable);
};
exports.default = sortTable;
const nullValuesComparison = (a, b) => {
    // null values are sorted at the end of the table
    return a && !b ? -1 : 1;
};
const numericComparison = (a, b, isAscending) => {
    const comparator = a < b ? 1 : -1;
    return isAscending ? comparator : comparator * (-1);
};
const dateStringComparison = (a, b, isAscending) => {
    const comparator = new Date(a) > new Date(b) ? 1 : -1;
    return isAscending ? comparator : comparator * (-1);
};
const stringComparison = (a, b, isAscending) => {
    const ascendingComparator = a.localeCompare(b, 'en-US', { numeric: true });
    const descendingComparator = b.localeCompare(a, 'en-US', { numeric: true });
    return isAscending ? ascendingComparator : descendingComparator;
};
