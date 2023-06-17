import { IColor } from "types/color.d";

export type TFontWeight =
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
export type TFontSize =
    | "4xs"
    | "3xs"
    | "2xs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | "10xl";
export type TFontFamily = "sans" | "serif" | "mono";
export type TTracking =
    | "tighter"
    | "tight"
    | "normal"
    | "wide"
    | "wider"
    | "widest";
export type TLeading =
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "none"
    | "tight"
    | "snug"
    | "normal"
    | "relaxed"
    | "loose";
export type TTextAlign =
    | "left"
    | "center"
    | "right"
    | "justify"
    | "start"
    | "end";
export type TTextDecoration =
    | "underline"
    | "overline"
    | "linethrough"
    | "serif";

export interface IFont {
    color?: IColor;
    family?: TFontFamily;
    leading?: TLeading;
    size?: TFontSize;
    tracking?: TTracking;
    weight?: TFontWeight;
    align?: TTextAlign;
    decoration?: TTextDecoration;
}
