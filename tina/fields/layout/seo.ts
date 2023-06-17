export function seo(title?: string, description?: string) {
    return {
        type: "object",
        name: "seo",
        label: title || "Config Settings",
        description:
            description || "SEO is a crucial part of your web application.",
        fields: [
            {
                type: "string",
                name: "url",
                label: "Page URL or Path",
                description: "The location of this page.",
            },
            {
                type: "string",
                name: "unique",
                label: "Unique Name",
                description: "This name should be unique (home, about).",
            },
            {
                type: "string",
                name: "title",
                label: "SEO Title",
                description: "The SEO content title.",
            },
            {
                type: "string",
                name: "description",
                label: "Meta Description",
                description: "The SEO content title.",
            },
            {
                type: "string",
                name: "keywords",
                label: "Meta Keywords",
                description: "A list of comma separated keywords.",
            },
            {
                type: "image",
                name: "image",
                label: "Meta Image",
                description: "Upload an image from your computer.",
                ui: {
                    parse(value: any) {
                        return value.startsWith("/") ? value.slice(1) : value;
                    },
                },
            },
        ],
    };
}
