import { LinkProps } from "next/link";
import { colorObject } from "../../tina/fields/settings";
import { ElementType, ReactNode } from "react";
import { GenericType } from "typescript";

export type TSpace = "xs" | "sm" | "md" | "lg" | "xl" | "none";

export type TColor = keyof typeof colorObject | "transparent";

export type TSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";

export type TRound = "xs" | "sm" | "md" | "lg" | "xl" | "full" | "none";

export interface ISpacing {
    bottom?: TSpace;
    left?: TSpace;
    right?: TSpace;
    top?: TSpace;
}

export interface IVariant {
    bgcolor?: TColor;
    color?: TColor;
    fill?: TColor;
    borderColor?: TColor;
    rounded?: TRound;
    spacing?: ISpacing;
    width?: TSize;
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
    variant?: IVariant;
}
