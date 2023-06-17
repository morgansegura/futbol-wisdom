"use client";
import { Fragment, useRef, useState } from "react";
import { useClickAway } from "react-use";
import clsx from "clsx";
import { useTinaClient } from "@hooks/useTinaClient";
import { tinaField } from "tinacms/dist/react";
// [Components]
import Typography from "@app/components/typography/Typography";
import Logo from "@app/components/logo/Logo";
import Navigation from "@app/components/navigation/Navigation";

// [Styles]
import s from "@app/components/footer/Footer.module.scss";
import Content, { DataWrapper } from "@app/components/content/Content";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface FooterProps {
    data?: any;
}

export function Copyright({ data }: any) {
    return (
        <DataWrapper
            component="p"
            className={s["copyright"]}
            dataTinaField={tinaField(data, "container")}
            data={data?.container}
        >
            <Typography
                component="span"
                className={s["symbol"]}
            >
                &copy;
            </Typography>

            {data?.copyrightBool && (
                <>
                    <Typography
                        className={s["date"]}
                        component="span"
                        data-tina-field={tinaField(data, "copyrightBool")}
                    >
                        {new Date().getFullYear()}
                    </Typography>
                </>
            )}

            <Typography
                className={s["text"]}
                component="span"
                data-tina-field={tinaField(data, "copyrightText")}
            >
                {data?.copyrightText}
            </Typography>
        </DataWrapper>
    );
}
export function SubscribeForm({ data, dataTinaField }: any) {
    const [active, setActive] = useState<boolean>(false);
    const inputRef = useRef<any>(null);

    function handleIntputFocus(bool: boolean) {
        setActive(bool);
    }

    useClickAway(inputRef, (e: any) => {
        setActive(false);
    });

    return (
        <div
            className={s["subscribe-form"]}
            data-tina-field={dataTinaField}
        >
            {data?.title && (
                <Typography
                    className={s["title"]}
                    component="h5"
                    data-tina-field={tinaField(data, "title")}
                >
                    {data?.title}
                </Typography>
            )}
            {data?.copy && (
                <Typography
                    className={s["copy"]}
                    dataTinaField={tinaField(data, "copy")}
                >
                    {data?.copy}
                </Typography>
            )}

            <form className={s["form"]}>
                <div className={s["control"]}>
                    <label
                        className={clsx(
                            s["placeholder"],
                            active && s["active"]
                        )}
                        data-tina-field={tinaField(data, "placeholder")}
                    >
                        {data?.placeholder}
                    </label>
                    <input
                        ref={inputRef}
                        onFocus={() => handleIntputFocus(true)}
                        className={clsx(s["text-input"], active && s["active"])}
                        placeholder="Enter your email"
                    />
                </div>
                <button
                    className={s["submit"]}
                    data-tina-field={tinaField(data, "submit")}
                >
                    {data?.submit}
                </button>
            </form>
        </div>
    );
}

export default function Footer({ data: rawData }: FooterProps) {
    const { data } = useTinaClient(rawData);
    const globalData = data?.settings;

    return (
        <DataWrapper
            component="footer"
            className={s["footer"]}
            dataTinaField={tinaField(globalData?.footer, "wrapper")}
            data={globalData?.footer?.wrapper}
            hasWrapper={globalData?.footer?.wrapper}
        >
            <DataWrapper
                component="div"
                dataTinaField={tinaField(globalData?.footer, "container")}
                data={globalData?.footer?.container}
                hasWrapper={globalData?.footer?.container}
                variant={{ font: { color: "#ffffff" } }}
            >
                <>
                    <div className={s["nav-main-container"]}>
                        <>
                            <Navigation
                                className={s["main-nav"]}
                                data={globalData?.settings?.mainnav}
                                dataTinaField={tinaField(
                                    globalData?.settings,
                                    "mainnav"
                                )}
                                display="list"
                                type="main"
                            />
                        </>
                    </div>
                </>
                <>
                    {globalData?.settings?.social && (
                        <Navigation
                            className={s["social-nav"]}
                            data={globalData?.settings?.social}
                            dataTinaField={tinaField(
                                globalData?.settings,
                                "social"
                            )}
                            display="list"
                            type="social"
                        />
                    )}

                    {globalData?.settings?.legal && (
                        <Navigation
                            className={s["legal-nav"]}
                            data={globalData?.settings?.legal}
                            dataTinaField={tinaField(
                                globalData?.settings,
                                "legal"
                            )}
                            display="list"
                            type="main"
                        />
                    )}
                </>

                {globalData?.footer?.blocks?.map((blocks: any, i: number) => (
                    <Fragment key={i}>
                        {blocks?.block?.map((block: any) => (
                            <Fragment key={block.__typename}>
                                {block.__typename ===
                                    "SettingsFooterBlocksBlockCopyright" && (
                                    <Copyright data={block} />
                                )}

                                {block.__typename === "SettingsFooterLogo" && (
                                    <DataWrapper
                                        component="div"
                                        dataTinaField={tinaField(
                                            block,
                                            "container"
                                        )}
                                        data={block?.container}
                                    >
                                        <Logo
                                            className={s["logo"]}
                                            path="/"
                                            logoType={block?.type}
                                            initials={
                                                globalData?.settings?.initials
                                            }
                                            name={globalData?.settings?.name}
                                            image={
                                                globalData?.settings?.logoimage
                                                    ?.image
                                            }
                                            imageWidth={
                                                globalData?.settings?.logoimage
                                                    ?.imageWidth
                                            }
                                            imageHeight={
                                                globalData?.settings?.logoimage
                                                    ?.imageHeight
                                            }
                                            dataTinaField={tinaField(
                                                globalData,
                                                "settings"
                                            )}
                                        />
                                    </DataWrapper>
                                )}
                                {block.__typename ===
                                    "SettingsFooterBlocksBlockRichtext" && (
                                    <DataWrapper
                                        component="div"
                                        dataTinaField={tinaField(
                                            block,
                                            "container"
                                        )}
                                        data={block?.container}
                                    >
                                        <div
                                            data-tina-field={tinaField(
                                                block,
                                                "richtext"
                                            )}
                                        >
                                            <TinaMarkdown
                                                content={block?.richtext}
                                            />
                                        </div>
                                    </DataWrapper>
                                )}
                                {block.__typename ===
                                    "SettingsFooterBlocksBlockSubscribeForm" && (
                                    <DataWrapper
                                        component="div"
                                        dataTinaField={tinaField(
                                            block,
                                            "container"
                                        )}
                                        data={block?.container}
                                    >
                                        <div
                                            data-tina-field={tinaField(
                                                block,
                                                "subscribeForm"
                                            )}
                                        >
                                            <SubscribeForm
                                                data={block}
                                                dataTinaField={tinaField(
                                                    block,
                                                    "container"
                                                )}
                                            />
                                        </div>
                                    </DataWrapper>
                                )}
                            </Fragment>
                        ))}
                    </Fragment>
                ))}

                {globalData?.footer?.logo?.logoType !== "none" && (
                    <DataWrapper
                        component="div"
                        dataTinaField={tinaField(
                            globalData?.footer?.logo?.container,
                            "container"
                        )}
                        data={globalData?.footer?.logo?.container}
                        hasWrapper={globalData?.footer?.logo?.container}
                    >
                        <Logo
                            className={s["logo"]}
                            path="/"
                            logoType={globalData?.footer?.logo?.logoType}
                            initials={globalData?.settings?.initials}
                            name={globalData?.settings?.name}
                            image={globalData?.settings?.logoimage?.image}
                            imageWidth={
                                globalData?.settings?.logoimage?.imageWidth
                            }
                            imageHeight={
                                globalData?.settings?.logoimage?.imageHeight
                            }
                            dataTinaField={tinaField(globalData, "settings")}
                        />
                    </DataWrapper>
                )}
            </DataWrapper>
        </DataWrapper>
    );
}
