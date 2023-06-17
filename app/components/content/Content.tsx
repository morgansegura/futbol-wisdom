"use client";

import { Fragment, ReactNode } from "react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

// [Components]
import Hero from "@app/components/hero/Hero";
import Box from "@app/components/box/Box";
// [Styles]
import s from "./Content.module.scss";
// [Types]
import { IContent } from "./Content.types";
import Button from "@components/inputs/button/Button";
import { useTinaClient } from "@hooks/useTinaClient";

export function DataWrapper({
    children,
    component,
    data,
    dataTinaField,
    hasWrapper = false,
    variant,
}: any) {
    const borderBool = data?.border?.bool || false;

    const variantPresents = {
        // Border Styles
        border: {
            bool: borderBool,
            style: borderBool && data?.border?.style,
            top: borderBool && data?.border?.top,
            bottom: borderBool && data?.border?.bottom,
            left: borderBool && data?.border?.left,
            right: borderBool && data?.border?.right,
            color: borderBool && data?.border?.color,
        },
        // display
        display: {
            block: data?.display?.block,
            "inline-block": data?.display?.inlineblock,
            inline: data?.display?.inline,
            flex: data?.display?.flex,
            "inline-flex": data?.display?.inlineflex,
            table: data?.display?.table,
        },
        // Flexbox

        flexbox: {
            direction: data?.flexbox?.direction,
            items: data?.flexbox?.items,
            self: data?.flexbox?.self,
            justifyContent: data?.flexbox?.justifyContent,
            justifySelf: data?.flexbox?.justifySelf,
            wrap: data?.flexbox?.wrap,
        },
        // Font
        font: {
            align: data?.font?.align,
            color: data?.font?.color,
            decoration: data?.font?.decoration,
            family: data?.font?.family,
            height: data?.font?.height,
            leading: data?.font?.leading,
            size: data?.font?.size,
            tracking: data?.font?.tracking,
            weight: data?.font?.weight,
        },
        // Grid
        grid: {
            gridCols: data?.grid?.cols,
            gridRows: data?.grid?.rows,
            colGap: data?.grid?.colgap,
            rowGap: data?.grid?.rowgap,
        },
        // Rounded Edges
        rounded: {
            topLeft: data?.rounded?.topLeft,
            topRight: data?.rounded?.topRight,
            bottomLeft: data?.rounded?.bottomLeft,
            bottomRight: data?.rounded?.bottomRight,
        },
        //  Spacing
        p: {
            x: data?.p?.x,
            y: data?.p?.y,
            t: data?.p?.t,
            b: data?.p?.b,
            l: data?.p?.l,
            r: data?.p?.r,
        },
        m: {
            x: data?.m?.x,
            y: data?.m?.y,
            t: data?.m?.t,
            b: data?.m?.b,
            l: data?.m?.l,
            r: data?.m?.r,
        },
        // Surface Settings
        bgcolor: data?.bgcolor,
        maxw: data?.maxw,
    };

    return hasWrapper ? (
        <Box
            component={component}
            dataTinaField={dataTinaField}
            variant={{ ...variantPresents, ...variant }}
        >
            {children}
        </Box>
    ) : (
        <>{children}</>
    );
}

export function DataController({ data, contentId, children }: any) {
    return data?.content?.map((item: any, i: number) => (
        <Fragment key={i}>
            {item?.slides && item?.__typename === `${contentId}Hero` && (
                <Hero
                    variant={item?.variant}
                    slides={item?.slides}
                />
            )}
            {item?.__typename === `${contentId}Richtext` && (
                <div
                    className={s["content"]}
                    data-tina-field={tinaField(item, "richtext")}
                >
                    <TinaMarkdown content={item?.richtext} />
                </div>
            )}
            {item?.__typename === `${contentId}Button` && (
                <Button
                    color={item?.color}
                    disabled={item?.disabled}
                    dataTinaField={item}
                    elevation={item?.elevation}
                    ripple={item?.ripple}
                    focus={item?.focus}
                    fullwidth={item?.fullwidth}
                    size={item?.size}
                    variant={item?.variant}
                >
                    {item?.label}
                </Button>
            )}
        </Fragment>
    ));
}

export default function Content({
    className,
    contentId,
    data: dataContent,
    contentType,
}: IContent) {
    const { data } = useTinaClient(dataContent);

    const content: any = {
        header: data?.settings?.header,
        footer: data?.settings?.footer,
        page: data?.page,
        post: data?.post,
        tag: data?.tag,
        author: data?.author,
    };

    return (
        <>
            {content[`${contentType}`] ? (
                <DataWrapper
                    hasWrapper={content[`${contentType}`]?.wrapper}
                    data={content[`${contentType}`]?.wrapper}
                    dataTinaField={tinaField(
                        content[`${contentType}`],
                        "wrapper"
                    )}
                    variant={{ surface: { width: "full" } }}
                >
                    <DataWrapper
                        hasWrapper={content[`${contentType}`]?.container}
                        data={content[`${contentType}`]?.container}
                        dataTinaField={tinaField(
                            content[`${contentType}`],
                            "container"
                        )}
                        variant={{ surface: { width: "xl" } }}
                    >
                        <DataController
                            data={content[`${contentType}`]}
                            contentId={contentId}
                        />
                    </DataWrapper>
                </DataWrapper>
            ) : (
                <div className={s["add-content"]}>Add some content here.</div>
            )}
        </>
    );
}
