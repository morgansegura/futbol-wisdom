export type TWidth = "0" | "px" | "2px" | "1";
export type TMaxWidth =
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
    | "full"
    | "min"
    | "max"
    | "fit"
    | "prose"
    | "screen-sm"
    | "screen-md"
    | "screen-lg"
    | "screen-xl"
    | "screen-2xl";

export type TMinWidth = {};

export interface IWidth {
    maxw?: TMaxWidth;
}
