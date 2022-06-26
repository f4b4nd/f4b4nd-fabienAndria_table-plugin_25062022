export const isDate = (datestr: string): boolean => {
    return !isNaN(new Date(datestr).getDate())
}