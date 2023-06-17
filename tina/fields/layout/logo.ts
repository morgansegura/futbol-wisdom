import { container } from "./container";

export function logoOptions(title?: string, description?: string) {
    return {
        type: "object",
        name: "logo",
        label: title || "Logo",
        description: description || "Choose your logo style.",
        fields: [
            container("Logo container", " "),
            {
                type: "string",
                name: "logoType",
                label: "Logo type",
                description: "Select the type of logo to display.",
                templateKeys: "logomama",
                options: [
                    { label: "None", value: "none" },
                    { label: "Text", value: "text" },
                    { label: "Initials", value: "initials" },
                    { label: "Image", value: "image" },
                    { label: "Initials and Text", value: "initials-text" },
                    { label: "Image and Text", value: "image-text" },
                    { label: "Image and Initials", value: "image-initials" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
        ],
    };
}

export function logoImage(title?: string, description?: string) {
    return {
        type: "object",
        name: "logoimage",
        label: title || "Logo Image",
        description: description || "Add a logo image.",
        fields: [
            {
                type: "image",
                name: "image",
                label: "Logo Image",
                description: "Upload an image from your computer.",
                ui: {
                    parse(value: any) {
                        return value.startsWith("/") ? value.slice(1) : value;
                    },
                },
            },
            {
                type: "number",
                name: "imageWidth",
                label: "Logo width",
                description: "The logo image width.",
            },
            {
                type: "number",
                name: "imageHeight",
                label: "Logo height",
                description: "The logo image height.",
            },
        ],
    };
}
