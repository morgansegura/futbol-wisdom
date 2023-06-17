export function rounded(title?: string, description?: string) {
    return {
        type: "object",
        name: "rounded",
        label: title || "Rounded Edges",
        description: description || "Round the edges of this content.",
        fields: [
            {
                type: "string",
                name: "topLeft",
                label: "Top Left",
                options: [
                    { label: "None", value: "none" },
                    { label: "Extra Small", value: "xs" },
                    { label: "Small", value: "sm" },
                    { label: "Medium", value: "md" },
                    { label: "Large", value: "lg" },
                    { label: "Extra Large", value: "xl" },
                    { label: "Full Circle", value: "full" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "topRight",
                label: "Top Right",
                options: [
                    { label: "None", value: "none" },
                    { label: "Extra Small", value: "xs" },
                    { label: "Small", value: "sm" },
                    { label: "Medium", value: "md" },
                    { label: "Large", value: "lg" },
                    { label: "Extra Large", value: "xl" },
                    { label: "Full Circle", value: "full" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "bottomLeft",
                label: "Bottom Left",
                options: [
                    { label: "None", value: "none" },
                    { label: "Extra Small", value: "xs" },
                    { label: "Small", value: "sm" },
                    { label: "Medium", value: "md" },
                    { label: "Large", value: "lg" },
                    { label: "Extra Large", value: "xl" },
                    { label: "Full Circle", value: "full" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "bottomRight",
                label: "Bottom Right",
                options: [
                    { label: "None", value: "none" },
                    { label: "Extra Small", value: "xs" },
                    { label: "Small", value: "sm" },
                    { label: "Medium", value: "md" },
                    { label: "Large", value: "lg" },
                    { label: "Extra Large", value: "xl" },
                    { label: "Full Circle", value: "full" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
        ],
    };
}
