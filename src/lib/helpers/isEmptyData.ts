export const objectIsEmpty = (obj: TtableRow): boolean => {
    const values = Object.values(obj)
    const notNullValues = values.filter(value => value && value !== "")
    return notNullValues.length === 0
}

export const tableIsEmpty = (table: Ttable): boolean => {
    
    if (table.length === 0) return true

    if (table.length === 1 && objectIsEmpty(table[0])) return true

    return false
    
}
