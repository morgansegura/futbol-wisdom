"use client";
import clsx from "clsx";
import { sans, serif } from "@app/fonts";

// [Styles]
import s from "./Box.module.scss";

// const colors = {};

// [Types]
import { IBox } from "./Box.types";
import { filterColors, getColorFromMap, styleProperties } from "@utils/helpers";
import { ReactElement } from "react";

export default function Box({
    children,
    className,
    component = "div",
    dataTinaField,
    onClick,
    title,
    path,
    type = "default",
    variant,
}: IBox) {
    const Component = component;

    const classList = clsx(
        s[type],
        s["content"],
        // Border
        // s[`border-${getColorFromMap(String(variant?.border?.color))}`],
        // s[`border-x-${variant?.border?.x}`],
        // s[`border-y-${variant?.border?.y}`],
        // s[`border-t-${variant?.border?.t}`],
        // s[`border-r-${variant?.border?.r}`],
        // s[`border-b-${variant?.border?.b}`],
        // s[`border-l-${variant?.border?.l}`],
        // s[`border-${variant?.border?.style}`],
        // Display
        s[`${variant?.display}`],
        s[`flex-${variant?.flexbox?.direction}`],
        // Justify
        s[`${variant?.flexbox?.justify}`],
        s[`justify-${variant?.flexbox?.justifyItems}`],
        s[`justify-${variant?.flexbox?.justifySelf}`],
        // Align
        s[`${variant?.flexbox?.items}`],
        s[`justify-${variant?.flexbox?.content}`],
        s[`justify-${variant?.flexbox?.self}`],
        // Flex Wrap
        s[`flex-${variant?.flexbox?.wrap}`],
        // Font
        s[`text-${getColorFromMap(String(variant?.font?.color))}`],
        s[`font-${variant?.font?.size}`],
        s[`font-${variant?.font?.weight}`],
        s[`font-${variant?.font?.family}`],
        s[`leading-${variant?.font?.leading}`],
        s[`tracking-${variant?.font?.tracking}`],
        s[`text-${variant?.font?.align}`],
        s[`${variant?.font?.decoration}`],

        // Grid
        // s[String(styleProperties(variant?.grid?.cols, "grid-cols-"))],
        // s[String(styleProperties(variant?.grid?.rows, "grid-rows-"))],
        // s[String(styleProperties(variant?.grid?.colGap, "col-gap-"))],
        // s[String(styleProperties(variant?.grid?.rowGap, "row-gap-"))],

        // // Rounded Edges
        // s[String(styleProperties(variant?.rounded?.topLeft, "rounded-tl-"))],
        // s[String(styleProperties(variant?.rounded?.topRight, "rounded-tr-"))],
        // s[
        //     String(
        //         styleProperties(variant?.rounded?.bottomRight, "rounded-br-")
        //     )
        // ],
        // s[String(styleProperties(variant?.rounded?.bottomLeft, "rounded-bl-"))],
        // Spacing
        s[`px-${variant?.p?.x}`],
        s[`py-${variant?.p?.y}`],
        s[`pt-${variant?.p?.t}`],
        s[`pr-${variant?.p?.r}`],
        s[`pb-${variant?.p?.b}`],
        s[`pl-${variant?.p?.l}`],
        s[`mx-${variant?.m?.x}`],
        s[`my-${variant?.m?.y}`],
        s[`mt-${variant?.m?.t}`],
        s[`mr-${variant?.m?.r}`],
        s[`mb-${variant?.m?.b}`],
        s[`ml-${variant?.m?.l}`],
        // Width
        s[`max-w-${variant?.maxw}`],
        // BGColor
        s[`bg-${getColorFromMap(String(variant?.bgcolor))}`],
        // s[String(filterColors(variant?.bgcolor, "bg"))],
        className
    );

    // console.log(s[`max-w-${variant?.maxw}`]);

    return (
        <>
            <Component
                data-tina-field={dataTinaField}
                className={classList}
                href={path}
                onClick={onClick}
                data-title={title}
            >
                {children}
            </Component>
        </>
    );
}
