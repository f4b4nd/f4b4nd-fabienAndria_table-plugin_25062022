/// <reference types="react" />
declare const DataRow: {
    ({ rowData, isColored }: IDataRow): JSX.Element;
    Cell({ data }: IDataRowCell): JSX.Element;
    Group({ children }: IChildren): JSX.Element;
};
export default DataRow;
