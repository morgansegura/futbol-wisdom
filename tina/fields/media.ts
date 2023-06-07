export const imageUploadField = {
    type: "image",
    name: "image",
    label: "Image Upload",
    description: "Upload an image from your device.",
    ui: {
        parse(value: any) {
            return value.startsWith("/") ? value.slice(1) : value;
        },
    },
};
export const imagePathField: any = {
    type: "string",
    name: "imageUrl",
    label: "Image Url",
    description: "Upload an image by link.",
    ui: {
        parse(value: any) {
            return value.startsWith("/") ? value.slice(1) : value;
        },
    },
};

export const imageFields = [
    imageUploadField,
    imagePathField,
    {
        type: "string",
        name: "credit",
        label: "Credits",
        description: "Give credit to the artist.",
    },
    {
        type: "string",
        name: "caption",
        label: "Caption",
        description: "Add a caption to the image.",
    },
];
