"use client";

import { Fragment } from "react";
import { useTinaClient } from "@hooks/useTinaClient";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

// [Components]
import Hero from "@components/hero/Hero";
import Box from "@components/box/Box";
// [Types]
import { IContent } from "./Content.types";

function DataWrapper({ children, component, data, dataTinaField }: any) {
    const variantPresents = {
        color: data?.textcolor || "transparent",
        bgcolor: data?.bgcolor || "transparent",
        borderColor: data?.bordercolor || "transparent",
        rounded: data?.rounded || "none",
        spacing: data?.spacing || {
            top: "none",
            right: "none",
            bottom: "none",
            left: "none",
        },
        width: data?.width || null,
    };

    return (
        <Box
            component={component}
            dataTinaField={dataTinaField}
            variant={variantPresents}
        >
            {children}
        </Box>
    );
}

const Cta = (props: any) => {
    console.log({ props });
    return <h2>{props.heading}</h2>;
};

export default function Content({ data: contentData, type }: IContent) {
    const { data } = useTinaClient(contentData);
    const content = data[type]?.content;

    return (
        <>
            {content ? (
                content?.map((item: any, i: number) => (
                    <Fragment key={i}>
                        {item?.slides && (
                            <DataWrapper
                                data={item?.wrapperSettings}
                                dataTinaField={tinaField(
                                    item,
                                    "wrapperSettings"
                                )}
                            >
                                <Hero
                                    variant={item?.variant}
                                    slides={item?.slides}
                                />
                            </DataWrapper>
                        )}
                        {item?.richTextField && (
                            <DataWrapper
                                data={item?.wrapperSettings}
                                dataTinaField={tinaField(
                                    item,
                                    "wrapperSettings"
                                )}
                            >
                                <DataWrapper
                                    data={item?.containerSettings}
                                    dataTinaField={tinaField(
                                        item,
                                        "containerSettings"
                                    )}
                                >
                                    <div
                                        data-tina-field={tinaField(
                                            item,
                                            "richTextField"
                                        )}
                                    >
                                        <TinaMarkdown
                                            components={{ Cta }}
                                            content={item?.richTextField}
                                        />
                                    </div>
                                </DataWrapper>
                            </DataWrapper>
                        )}
                    </Fragment>
                ))
            ) : (
                <></>
            )}
        </>
    );
}
