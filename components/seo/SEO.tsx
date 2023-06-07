"use client";
import React from "react";
import Head from "next/head";
import { useTinaClient } from "@hooks/useTinaClient";

{
    /* https://developers.google.com/search/docs/beginner/seo-starter-guide */
}
// [Components]

// [Types]
export interface ISeo {
    data: any;
    type: string;
    siteData?: any;
}

export default function Seo({
    data: contentData,
    type = "page",
    siteData,
}: ISeo) {
    const { data } = useTinaClient(contentData);
    const { data: site } = useTinaClient(siteData);

    const contentType = data.post ? data.post[type] : data.page[type];

    const title = contentType?.seo?.title;
    const description = contentType?.seo?.description;
    const image = contentType?.seo?.image;
    const keywords = contentType?.seo?.keywords;
    const path = contentType?.seo?.url;
    const name = site?.name;

    return (
        <Head>
            <title>
                {title} | {name}
            </title>

            <meta
                httpEquiv="X-UA-Compatible"
                content="IE=edge"
            />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta
                name="keywords"
                content={keywords}
            />

            <link
                rel="manifest"
                href="/manifest.json"
            />
            <link
                href="/favicon-16x16.png"
                rel="icon"
                type="image/png"
                sizes="16x16"
            />
            <link
                href="/favicon-32x32.png"
                rel="icon"
                type="image/png"
                sizes="32x32"
            />
            <link
                rel="apple-touch-icon"
                href="/apple-icon.png"
            ></link>

            <meta
                property="og:title"
                content={title}
            />
            <meta
                name="description"
                content={description}
            />
            <meta
                property="og:description"
                content={description}
            />
            <meta
                property="og:url"
                content={path || "/"}
            />
            <meta
                property="og:image"
                content={image}
            />
            <meta
                property="og:image:width"
                content="1200"
            />
            <meta
                property="og:image:height"
                content="675"
            />
            <meta
                property="og:locale"
                content="en"
            />
            <meta
                name="twitter:card"
                content="summary_large_image"
            />
            <link
                rel="icon"
                href="/favicon.ico"
            />
            <meta
                property="og:site_name"
                content={name}
            />
            <meta
                property="og:type"
                content="website"
            />
            <meta
                name="theme-color"
                content="#ffffff"
            />
            <meta charSet="utf-8" />
            <meta
                content="IE=Edge"
                httpEquiv="X-UA-Compatible"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            {/* <link
                    rel="manifest"
                    href="/_pwa/developers/manifest.json"
                    crossOrigin="use-credentials"
                ></link> */}
            <meta
                name="session_expiry"
                content="0"
            />
        </Head>
    );
}
