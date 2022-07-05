"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_1 = require("./date");
/** Gets data type for each column */
const getDataTypes = (data) => {
    if (data.length <= 0)
        return {};
    const colNames = Object.keys(data[0]);
    const dataTypes = colNames.reduce((acc, colName) => {
        const columnData = data.map(item => item[colName]);
        const dataType = { [colName]: getDataTypeFromColumn(columnData) };
        return { ...acc, ...dataType };
    }, {});
    return dataTypes;
};
exports.default = getDataTypes;
const getDataTypeFromColumn = (columnData) => {
    const defaultType = 'string';
    const maxIterations = 20;
    let index = 0;
    let dataType = "";
    while (dataType === "" && index < maxIterations) {
        const item = columnData[index];
        if (!item) {
            index++;
            continue;
        }
        if (typeof item === 'number')
            dataType = 'number';
        if ((0, date_1.isDate)(`${item}`))
            dataType = 'date';
        const typeIsValid = typeof item !== 'object';
        if (typeIsValid)
            dataType = typeof item;
        index++;
    }
    return dataType !== "" ? dataType : defaultType;
};
