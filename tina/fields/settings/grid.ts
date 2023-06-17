export function grid(title?: string, description?: string) {
    return {
        type: "object",
        name: "grid",
        label: title || "Grid",
        description: description || "Add a grid to this content.",
        fields: [
            {
                type: "string",
                name: "cols",
                label: "Grid Columns",
                options: [
                    { label: "None", value: "none" },
                    { label: "2 Columns", value: "2" },
                    { label: "3 Columns", value: "3" },
                    { label: "4 Columns", value: "4" },
                    { label: "5 Columns", value: "5" },
                    { label: "6 Columns", value: "6" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "rows",
                label: "Grid Rows",
                options: [
                    { label: "None", value: "none" },
                    { label: "2 rows", value: "2" },
                    { label: "3 rows", value: "3" },
                    { label: "4 rows", value: "4" },
                    { label: "5 rows", value: "5" },
                    { label: "6 rows", value: "6" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "rowgap",
                label: "Row Gap",
                options: [
                    { label: "None", value: "none" },
                    { label: "Extra Small", value: "xs" },
                    { label: "Small", value: "sm" },
                    { label: "Medium", value: "md" },
                    { label: "Large", value: "lg" },
                    { label: "Extra Large", value: "xl" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "colgap",
                label: "Col Gap",
                options: [
                    { label: "None", value: "none" },
                    { label: "Extra Small", value: "xs" },
                    { label: "Small", value: "sm" },
                    { label: "Medium", value: "md" },
                    { label: "Large", value: "lg" },
                    { label: "Extra Large", value: "xl" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
        ],
    };
}
