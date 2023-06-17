export type TJustifyContent =
    | "normal"
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "stretch";
export type TJustifyItems = "start" | "end" | "center" | "stretch";
export type TJustifySelf = "auto" | "start" | "end" | "center" | "stretch";
export type TAlignContent =
    | "normal"
    | "center"
    | "start"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "baseline"
    | "stretch";
export type TAlignItems =
    | "normal"
    | "center"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "stretch";
export type TAlignSelf =
    | "normal"
    | "center"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "stretch";
export type TPlaceContent =
    | "center"
    | "start"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "baseline"
    | "stretch";
export type TPlaceItems =
    | "center"
    | "start"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "baseline"
    | "stretch";
export type TPlaceSelf =
    | "center"
    | "start"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "baseline"
    | "stretch";
export type TWrap = "nowrap" | "wrap" | "wrap-reverse";
export type TDirection = "column" | "column-reverse" | "row" | "row-reverse";

export interface IFlexbox {
    basis?: TFlexBasis;
    flex?: TFlex;
    content?: TAlignContent;
    direction?: TDirection;
    items?: TAlignItems;
    self?: TAlignSelf;
    justify?: TJustifyContent;
    justifyitems?: TJustifyItems;
    justifyself?: TJustifySelf;
    placecontent?: TPlaceContent;
    placeitems?: TPlaceItems;
    placeself?: TPlaceSelf;
    wrap?: TWrap;
}

export interface IFlexChild {
    flex?: IOrder;
    order?: IOrder;
    placeself?: TPlaceSelf;
    justifyself?: TJustifySelf;
    self?: TAlignSelf;
}
