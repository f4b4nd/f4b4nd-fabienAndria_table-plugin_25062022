interface IPage {
    isActive: boolean;
}
interface IArrow {
    isVisible: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Inner: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Page: import("styled-components").StyledComponent<"div", any, IPage, never>;
export declare const PageItems: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const LeftArrow: import("styled-components").StyledComponent<"div", any, IArrow, never>;
export declare const RightArrow: import("styled-components").StyledComponent<"div", any, IArrow, never>;
export {};
