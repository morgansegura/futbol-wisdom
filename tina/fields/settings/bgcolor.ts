import { colorObject } from "../variables";

export function bgcolor(title?: string, description?: string) {
    return {
        type: "string",
        name: "bgcolor",
        label: title || "Background color",
        description: description || "Choose a background color.",
        ui: {
            component: "color",
            colorFormat: "hex",
            colors: [...Object.values(colorObject)],
            widget: "block",
        },
    };
}
