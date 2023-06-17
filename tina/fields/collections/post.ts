import { seo } from "../layout/seo";

export function postRouter() {
    return {
        router: ({ document }: any) => `/posts/${document._sys.filename}`,
    };
}

export function post() {
    return {
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
        fields: [
            seo(),
            {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                // required: true,
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
        ],
    };
}
