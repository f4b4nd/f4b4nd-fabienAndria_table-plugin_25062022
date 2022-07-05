/// <reference types="react" />
declare const HeaderRow: {
    ({ dataTypes, results, setResults }: IHeaderRow): JSX.Element;
    Cell({ data, children }: IHeaderRowCell): JSX.Element;
    SortIcon({ sortByColumn, dataType, activeColumn, setActiveColumn, results, setResults }: IHeaderRowSortIcon): JSX.Element;
    Group({ children }: IChildren): JSX.Element;
};
export default HeaderRow;
