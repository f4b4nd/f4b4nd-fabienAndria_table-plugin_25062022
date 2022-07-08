"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectIsEmpty = (obj) => {
    const values = Object.values(obj);
    const notNullValues = values.filter(value => value && value !== "");
    return notNullValues.length === 0;
};
exports.default = objectIsEmpty;
