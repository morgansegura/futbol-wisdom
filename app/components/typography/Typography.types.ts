import { ElementType, ReactNode } from "react";

export type TFontSize =
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

export type TLineHeight =
    | "none"
    | "tight"
    | "snug"
    | "normal"
    | "relaxed"
    | "loose";
export type TFontFamily = "sans" | "serif";
export type TFontWeight =
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "black";

export type TLetterSpacing = "tight" | "normal" | "wide" | "wider" | "widest";

export interface ITypography {
    children?: ReactNode;
    dataTinaField?: any;
    className?: string;
    component?: ElementType;
    family?: TFontFamily;
    height?: TLineHeight;
    selectable?: boolean;
    size?: TFontSize;
    spacing?: TLetterSpacing;
    weight?: TFontWeight;
}
