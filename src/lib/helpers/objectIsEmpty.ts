const objectIsEmpty = (obj: TtableRow): boolean => {
    const values = Object.values(obj)
    const notNullValues = values.filter(value => value && value !== "")
    return notNullValues.length === 0
}

export default objectIsEmpty