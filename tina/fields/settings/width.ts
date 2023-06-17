export function maxwidth(title?: string, description?: string) {
    return {
        type: "string",
        name: "maxw",
        label: title || "Width",
        description: description || "Select the max width of this content.",
        options: [
            { label: "Extra Small", value: "xs" },
            { label: "Small", value: "lg" },
            { label: "Medium", value: "3xl" },
            { label: "Large", value: "5xl" },
            { label: "Extra Large", value: "7xl" },
            { label: "Full Width", value: "full" },
        ],
        ui: {
            defaultValue: "full",
        },
    };
}
