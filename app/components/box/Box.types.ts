import { colorObject } from "../../../tina/fields/variables";
import { ElementType, ReactNode } from "react";
import { GenericType } from "typescript";

// @ts-ignore
import { IFont } from "types/font.d";
// @ts-ignore
import { ISizing } from "types/sizing.d";
// @ts-ignore
import { IColor, IBgColor } from "types/spacing.d";
// @ts-ignore
import { IFlexbox, IFlexChild } from "types/spacing.d";
// @ts-ignore
import { IMaxWidth } from "types/width.d";

// export interface ISpace {
//     bottom?: TSpace;
//     left?: TSpace;
//     right?: TSpace;
//     top?: TSpace;
// }

// export interface IBorder {
//     bool?: boolean;
//     style?: TBorderStyle;
//     color?: IColor;
//     b?: TSpace;
//     l?: TSpace;
//     r?: TSpace;
//     t?: TSpace;
//     x?: TSpace;
//     y?: TSpace;
// }
// export interface IGrid {
//     bool?: boolean;
//     gridCols?: TCols;
//     gridRows?: TCols;
//     colGap?: TSpace;
//     rowGap?: TSpace;
// }

// export interface IRounded {
//     bool?: boolean;
//     topLeft?: TRound;
//     topRight?: TRound;
//     bottomLeft?: TRound;
//     bottomRight?: TRound;
// }

// export interface ISurface {
//     width?: TSize;
//     bgcolor?: TColor;
// }

export interface IVariant {
    // border?: IBorder;
    bgcolor?: IBgColor;
    display?: string;
    flexbox?: IFlexbox;
    flexchild?: IFlexChild;
    font?: IFont;
    // grid?: IGrid;
    // rounded?: IRounded;
    m?: ISizing;
    p?: ISizing;
    maxw?: IMaxWidth;
}

export interface IBox {
    children?: ReactNode;
    className?: string;
    component?: ElementType;
    dataTinaField?: any;
    firstClass?: boolean;
    onClick?: Function;
    path?: string;
    target?: "_self" | "_blank";
    title?: string;
    rest?: GenericType;
    type?: "default" | "prose";
    variant?: IVariant;
}

/*
    display





















    flex-direction
*/
