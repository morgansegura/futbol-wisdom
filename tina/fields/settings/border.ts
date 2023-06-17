import { colorObject } from "../variables";

export function border(title?: string, description?: string) {
    return {
        type: "object",
        name: "border",
        label: "Border",
        description: "Add a border around the content.",
        fields: [
            {
                type: "boolean",
                name: "bool",
                label: "Border",
                description: "Add a border?",
                ui: {
                    defaultValue: false,
                },
            },
            {
                type: "string",
                name: "color",
                label: "Border color",
                description: "Choose a border color.",
                ui: {
                    component: "color",
                    colorFormat: "hex",
                    colors: [...Object.values(colorObject)],
                    widget: "block",
                },
            },
            {
                type: "string",
                name: "style",
                label: "Border Style",
                options: [
                    { label: "Solid", value: "solid" },
                    { label: "Dashed", value: "dashed" },
                    { label: "Dotted", value: "dotted" },
                    { label: "Double", value: "double" },
                    { label: "Groove", value: "groove" },
                    { label: "Inset", value: "inset" },
                    { label: "Outset", value: "outset" },
                    { label: "Ridge", value: "ridge" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "top",
                label: "Border Top",
                options: [
                    { label: "None", value: "none" },
                    { label: "1px", value: "xs" },
                    { label: "2px", value: "sm" },
                    { label: "4px", value: "md" },
                    { label: "8px", value: "lg" },
                    { label: "12px", value: "xl" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "bottom",
                label: "Border Bottom",
                options: [
                    { label: "None", value: "none" },
                    { label: "1px", value: "xs" },
                    { label: "2px", value: "sm" },
                    { label: "4px", value: "md" },
                    { label: "8px", value: "lg" },
                    { label: "12px", value: "xl" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "left",
                label: "Border Left",
                options: [
                    { label: "None", value: "none" },
                    { label: "1px", value: "xs" },
                    { label: "2px", value: "sm" },
                    { label: "4px", value: "md" },
                    { label: "8px", value: "lg" },
                    { label: "12px", value: "xl" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "right",
                label: "Border Right",
                options: [
                    { label: "None", value: "none" },
                    { label: "1px", value: "xs" },
                    { label: "2px", value: "sm" },
                    { label: "4px", value: "md" },
                    { label: "8px", value: "lg" },
                    { label: "12px", value: "xl" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
        ],
    };
}
function color(arg0: string, arg1: string) {
    throw new Error("Function not implemented.");
}
