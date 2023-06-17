export function flexbox() {
    return {
        type: "object",
        name: "flexbox",
        label: "Flexbox",
        description: "Use Flexbox.",
        fields: [
            {
                type: "string",
                name: "direction",
                label: "Flex Direction",
                description: "The amount of columns.",
                options: [
                    { label: "Row", value: "row" },
                    { label: "Row Reverse", value: "row-reverse" },
                    { label: "Column", value: "column" },
                    { label: "Column Reverse", value: "column-reerse" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "wrap",
                label: "Flex Wrap",
                options: [
                    { label: "No Wrap", value: "nowrap" },
                    { label: "Wrap", value: "wrap" },
                    { label: "Wrap Reverse", value: "wrap-reverse" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "alignItems",
                label: "Align Items",
                options: [
                    { label: "Normal", value: "normal" },
                    { label: "Start", value: "start" },
                    { label: "End", value: "end" },
                    { label: "Flex Start", value: "flex-start" },
                    { label: "Flex End", value: "flex-end" },
                    { label: "Center", value: "center" },
                    { label: "Baseline", value: "baseline" },
                    { label: "Stretch", value: "stretch" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "alignSelf",
                label: "Align Self",
                options: [
                    { label: "Normal", value: "normal" },
                    { label: "Start", value: "start" },
                    { label: "End", value: "end" },
                    { label: "Flex Start", value: "flex-start" },
                    { label: "Flex End", value: "flex-end" },
                    { label: "Center", value: "center" },
                    { label: "Baseline", value: "baseline" },
                    { label: "Stretch", value: "stretch" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "justifyContent",
                label: "Justify Content",
                options: [
                    { label: "Start", value: "start" },
                    { label: "End", value: "end" },
                    { label: "Flex Start", value: "flex-start" },
                    { label: "Flex End", value: "flex-end" },
                    { label: "Center", value: "center" },
                    { label: "Space Between", value: "between" },
                    { label: "Space Around", value: "around" },
                    { label: "Space Evenly", value: "evenly" },
                    { label: "Stretch", value: "stretch" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "justifySelf",
                label: "Justify Self",
                options: [
                    { label: "Start", value: "start" },
                    { label: "End", value: "end" },
                    { label: "Flex Start", value: "flex-start" },
                    { label: "Flex End", value: "flex-end" },
                    { label: "Center", value: "center" },
                    { label: "Space Between", value: "between" },
                    { label: "Space Around", value: "around" },
                    { label: "Space Evenly", value: "evenly" },
                    { label: "Stretch", value: "stretch" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
        ],
    };
}
