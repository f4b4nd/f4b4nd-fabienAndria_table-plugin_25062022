/// <reference types="react" />
declare const Slicer: {
    ({ children }: ISlicer): JSX.Element;
    Select({ setRowsPerPage, children, ...restProps }: ISlicerSelect): JSX.Element;
    SelectOption({ children, ...restProps }: ISlicerSelectOption): JSX.Element;
    Label({ children }: ISlicerLabel): JSX.Element;
};
export default Slicer;
