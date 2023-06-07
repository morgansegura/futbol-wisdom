import { defineConfig } from "tinacms";
import { simpleSubscribeForm } from "./fields/forms";
import { logoSettings, seoSettings, siteSettings } from "./fields/settings";
import { pageFields } from "./fields/pages";
import { imageFields } from "./fields/media";
import { contentTemplate } from "./fields/content";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

const globalFields: any = [
    {
        type: "object",
        name: "settings",
        label: "Site Settings",
        description: "Setup site features.",
        fields: [...siteSettings],
    },
    {
        type: "object",
        name: "header",
        label: "Header",
        description: "Stylize the header for this site.",
        fields: [logoSettings],
    },
    {
        type: "object",
        name: "footer",
        label: "Footer",
        description: "Stylize the footer for this site.",
        fields: [logoSettings, simpleSubscribeForm],
    },
];

const postFields: any = [
    seoSettings,
    {
        type: "string",
        name: "title",
        label: "Title",
        isTitle: true,
        required: true,
    },
    {
        type: "datetime",
        label: "Date",
        name: "date",
    },
    {
        label: "Author",
        name: "authors",
        type: "reference",
        collections: ["author"],
    },
    {
        type: "rich-text",
        name: "body",
        label: "Body",
        isBody: true,
    },
    {
        label: "Tags",
        name: "tags",
        type: "string",
        list: true,
    },
    contentTemplate,
];

export default defineConfig({
    branch,
    clientId: `${process.env.tinaClientId}`,
    token: `${process.env.tinaToken}`,

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "media",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [
            {
                name: "page",
                label: "Pages",
                path: "content/pages",
                format: "mdx",
                match: {
                    include: "**/**/*.mdx",
                },
                ui: {
                    router: ({ document }: any) => {
                        if (document._sys.filename === "home") {
                            return "/";
                        } else {
                            return `/${document._sys.filename}`;
                        }
                    },
                },
                fields: pageFields,
            },
            {
                name: "post",
                label: "Posts",
                path: "content/posts",
                format: "mdx",
                defaultItem: () => {
                    return {
                        // Return a default title and the current date as the default date
                        title: "New post",
                        date: new Date().toISOString(),
                    };
                },
                fields: postFields,
                match: {
                    include: "**/**/*.mdx",
                },
                ui: {
                    // This is an DEMO router. You can remove this to fit your site
                    router: ({ document }) =>
                        `/posts/${document._sys.filename}`,
                },
            },
            {
                name: "featuredPost",
                label: "Featured Posts",
                path: "content/posts/featured",
                format: "mdx",
                defaultItem: () => {
                    return {
                        // Return a default title and the current date as the default date
                        title: "New featured post",
                        date: new Date().toISOString(),
                    };
                },
                fields: postFields,
                match: {
                    include: "**/**",
                },
                ui: {
                    // This is an DEMO router. You can remove this to fit your site
                    router: ({ document }) =>
                        `/posts/featured/${document._sys.filename}`,
                },
            },
            // {
            //     name: "tags",
            //     label: "Tag",
            //     path: "tags",
            //     fields: [
            //         {
            //             type: "string",
            //             name: "label",
            //             label: "Label",
            //         },
            //         {
            //             type: "string",
            //             name: "path",
            //             label: "Path",
            //         },
            //     ],
            // },
            {
                label: "Author",
                name: "author",
                path: "authors",
                fields: [
                    {
                        type: "string",
                        name: "fullname",
                        label: "Full Name",
                    },
                    {
                        type: "string",
                        name: "penname",
                        label: "Pen Name",
                        description:
                            "This is a ficticious name you can use to hide your true identity, if you want to.",
                    },
                    {
                        type: "rich-text",
                        name: "bio",
                        label: "Bio",
                        isBody: true,
                    },
                    {
                        type: "string",
                        name: "avatar",
                        label: "Avatar",
                        fields: imageFields,
                    },
                ],
            },
            {
                name: "settings",
                label: "Global Features",
                path: "content/settings",
                format: "mdx",
                // ui: {
                //     global: false,
                // },
                fields: globalFields,
            },
        ],
    },
});
