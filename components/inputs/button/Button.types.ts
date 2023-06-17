import { ReactNode } from "react";

export type TColor = string;
export type TSize = "sm" | "md" | "lg";
export type TIcon = "start" | "end";
export type TVariant = "text" | "outlined" | "contained";

export interface IButton {
    children?: ReactNode;
    color?: TColor;
    dataTinaField?: any;
    disabled?: boolean;
    elevation?: boolean;
    ripple?: boolean;
    focus?: boolean;
    fullwidth?: boolean;
    icon?: TIcon;
    size?: TSize;
    variant?: TVariant;
}
