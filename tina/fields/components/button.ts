import { wrapFieldsWithMeta } from "tinacms";
import { enhanceTextInputUI } from "../utils/uistyle";
import { container } from "../layout/container";
import { colorObject } from "../variables";

export function button(title?: string, description?: string) {
    return {
        type: "object",
        name: "button",
        label: title || "Button",
        description: description || "Create a button.",
        __template: "button",
        fields: [
            container(),
            {
                type: "string",
                name: "label",
                label: " ",
                // description: "Setup the button options.",
                ui: {
                    component: wrapFieldsWithMeta(({ field, input, meta }) =>
                        enhanceTextInputUI(
                            field,
                            input,
                            meta,
                            "Button Options",
                            "Button Label",
                            ""
                        )
                    ),
                },
            },
            {
                type: "string",
                name: "color",
                label: "Button color",
                description: "Stylize the button.",
                ui: {
                    component: "color",
                    colorFormat: "hex",
                    colors: [...Object.values(colorObject)],
                    widget: "block",
                },
            },
            {
                type: "string",
                name: "variant",
                label: "Button Style",
                options: [
                    { label: "Text", value: "text" },
                    { label: "Outlined", value: "outlined" },
                    { label: "Contained", value: "contained" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "size",
                label: "Button Size",
                options: [
                    { label: "Small", value: "sm" },
                    { label: "Medium", value: "md" },
                    { label: "Large", value: "lg" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "ripple",
                label: "Ripple Effect",
                component: "toggle",
                toggleLabels: {
                    true: "Keep Ripple",
                    false: "Remove Ripple",
                },
            },
            {
                type: "string",
                name: "fullwidth",
                label: "Width",
                component: "toggle",
                toggleLabels: {
                    true: "Full Width",
                    false: "Remove Ripple",
                },
            },
            {
                type: "string",
                name: "path",
                label: " ",
                ui: {
                    component: wrapFieldsWithMeta(({ field, input, meta }) =>
                        enhanceTextInputUI(
                            field,
                            input,
                            meta,
                            "Link Options",
                            "Button Link URL",
                            ""
                        )
                    ),
                },
            },
            {
                type: "string",
                name: "title",
                label: "Button Data Title",
            },
            {
                type: "string",
                name: "target",
                label: "Target",
                component: "toggle",
                toggleLabels: {
                    true: "New Tab",
                    false: "Same Tab",
                },
            },
        ],
    };
}
