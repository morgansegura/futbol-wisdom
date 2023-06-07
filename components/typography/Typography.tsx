"use client";
// [Styles]
import clsx from "clsx";
import s from "./Typography.module.scss";
import { sans, serif } from "@app/fonts";
// [Types]
import { ITypography } from "./Typography.types";

let ff: string = "";
let fs: string = "";
let fw: string = "";
let lsp: string = "";
let lh: string = "";

export default function Typography({
    children,
    className,
    component = "div",
    dataTinaField,
    family = "sans",
    height,
    selectable = false,
    size,
    spacing,
    weight = "normal",
}: ITypography) {
    switch (size) {
        case "2xs":
            fs = s.size__2xs;
            break;
        case "xs":
            fs = s.size__xs;
            break;
        case "sm":
            fs = s.size__sm;
            break;
        case "md":
            fs = s.size__md;
            break;
        case "lg":
            fs = s.size__lg;
            break;
        case "xl":
            fs = s.size__xl;
            break;
        case "2xl":
            fs = s.size__2xl;
            break;
        case "3xl":
            fs = s.size__3xl;
            break;
        case "4xl":
            fs = s.size__4xl;
            break;
        case "5xl":
            fs = s.size__5xl;
            break;
        case "6xl":
            fs = s.size__6xl;
            break;
        case "7xl":
            fs = s.size__7xl;
            break;
        case "8xl":
            fs = s.size__8xl;
            break;
        case "9xl":
            fs = s.size__9xl;
            break;
        case "10xl":
            fs = s.size__10xl;
            break;
    }

    switch (height) {
        case "none":
            lh = s.height__none;
            break;
        case "tight":
            lh = s.height__tight;
            break;
        case "snug":
            lh = s.height__snug;
            break;
        case "normal":
            lh = s.height__normal;
            break;
        case "relaxed":
            lh = s.height__relaxed;
            break;
        case "loose":
            lh = s.height__loose;
            break;
    }

    switch (spacing) {
        case "tight":
            lsp = s.spacing__tight;
            break;
        case "normal":
            lsp = s.spacing__normal;
            break;
        case "wide":
            lsp = s.spacing__wide;
            break;
        case "wider":
            lsp = s.spacing__wider;
            break;
        case "widest":
            lsp = s.spacing__widest;
            break;
    }

    switch (weight) {
        case "light":
            fw = s.weight__light;
            break;
        case "normal":
            fw = s.weight__normal;
            break;
        case "medium":
            fw = s.weight__medium;
            break;
        case "semibold":
            fw = s.weight__semibold;
            break;
        case "bold":
            fw = s.weight__bold;
            break;
        case "black":
            fw = s.weight__black;
            break;
    }

    switch (family) {
        case "sans":
            ff = sans.className;
            break;
        case "serif":
            ff = serif.className;
            break;
    }

    const Component = component;
    return (
        <Component
            data-tina-field={dataTinaField}
            className={clsx(
                s.typography,
                ff,
                fs,
                lh,
                fw,
                lsp,
                selectable ? s.selectable : ``,
                className
            )}
        >
            {children}
        </Component>
    );
}
