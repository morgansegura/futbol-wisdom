export function image(
    type: "embed" | "url",
    title?: string,
    description?: string
) {
    switch (type) {
        case "embed":
            return {
                type: "image",
                name: "embed",
                label: "Logo Image",
                description: "Upload an image from your computer.",
                ui: {
                    parse(value: any) {
                        return value.startsWith("/") ? value.slice(1) : value;
                    },
                },
            };
        case "url":
            return {
                type: "string",
                name: "url",
                label: title || "Logo Image",
                description:
                    description || "Provide a path to an external image.",
            };
    }
}
