"use client";

import { colorObject } from "@tina/fields/settings";
// [Styles]
import s from "./Box.module.scss";
// [Types]
import { IBox } from "./Box.types";
import clsx from "clsx";

function filterColors(property: string, color?: string) {
    let name: any;
    const colorFilter = Object.entries(colorObject).find(
        (c: any) => c[1].toLowerCase() === color?.toLowerCase()
    );
    if (colorFilter !== undefined) {
        name = colorFilter[0];
    }
    if (!name) return;
    // console.log(`${property}-${name}`);
    return s[`${property}-${name}`];
}

function styleProperties(item?: string, prefix?: string) {
    if (!item) return;
    return s[`${prefix}${item}`];
}

export default function Box({
    children,
    className,
    component = "div",
    dataTinaField,
    onClick,
    title,
    path,
    variant,
}: IBox) {
    const Component = component;

    // console.log(variant?.bgcolor);

    return (
        <>
            <Component
                data-tina-field={dataTinaField}
                className={clsx(
                    s.content,
                    styleProperties(variant?.width, "w__"),
                    styleProperties(variant?.spacing?.top, "pt__"),
                    styleProperties(variant?.spacing?.right, "pr__"),
                    styleProperties(variant?.spacing?.bottom, "pb__"),
                    styleProperties(variant?.spacing?.left, "pl__"),
                    styleProperties(variant?.rounded, "rounded__"),
                    filterColors("bg", variant?.bgcolor),
                    filterColors("color", variant?.color),
                    filterColors("border", variant?.borderColor),
                    className
                )}
                href={path}
                onClick={onClick}
                data-title={title}
            >
                {children}
            </Component>
        </>
    );
}

/*
    Wrapper
        bgColor
        textColor
        margin x-y
        padding x-y
        grid
        flexbox
*/
