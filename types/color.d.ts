import { colorObject } from "@tina/fields/variables";

export type TColor = keyof typeof colorObject | "transparent";

export interface IColor {
    color?: TColor;
}

export interface IBgColor {
    bgcolor?: TColor;
}

export interface IBorderColor {
    bordercolor?: TColor;
}
