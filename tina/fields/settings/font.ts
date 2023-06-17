import { colorObject } from "../variables";

export function fontFamily() {
    return {
        type: "string",
        label: "Font Family",
        name: "family",
        options: [
            { label: "Sans", value: "sans" },
            { label: "Serif", value: "serif" },
            { label: "Mono", value: "mono" },
        ],
        ui: {
            defaultValue: true,
        },
    };
}

export function fontSize() {
    return {
        type: "string",
        label: "Size",
        name: "size",
        options: [
            { label: "8px", value: "4xs" },
            { label: "10px", value: "3xs" },
            { label: "12px", value: "2xs" },
            { label: "13px", value: "xs" },
            { label: "14px", value: "sm" },
            { label: "16px", value: "md" },
            { label: "18px", value: "lg" },
            { label: "20px", value: "xl" },
            { label: "22px", value: "2xl" },
            { label: "24px", value: "3xl" },
            { label: "28px", value: "4xl" },
            { label: "32px", value: "5xl" },
            { label: "36px", value: "6xl" },
            { label: "40px", value: "7xl" },
            { label: "44px", value: "8xl" },
            { label: "48px", value: "9xl" },
            { label: "52px", value: "10xl" },
        ],
        ui: {
            defaultValue: true,
        },
    };
}

export function fontWeight() {
    return {
        type: "string",
        label: "Font Weight",
        name: "weight",
        options: [
            { label: "Light", value: "light" },
            { label: "Normal", value: "normal" },
            { label: "Medium", value: "medium" },
            { label: "Semibold", value: "semibold" },
            { label: "Bold", value: "bold" },
            { label: "Extrabold", value: "extrabold" },
            { label: "Black", value: "black" },
        ],
        ui: {
            defaultValue: true,
        },
    };
}
// Line height
export function leading() {
    return {
        type: "string",
        label: "Line Height",
        name: "leading",
        options: [
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
            { label: "7", value: "7" },
            { label: "8", value: "8" },
            { label: "9", value: "0" },
            { label: "10", value: "10" },
            { label: "None", value: "light" },
            { label: "Normal", value: "normal" },
            { label: "Medium", value: "medium" },
            { label: "Semibold", value: "semibold" },
            { label: "Bold", value: "bold" },
            { label: "Extrabold", value: "extrabold" },
            { label: "Black", value: "black" },
        ],
        ui: {
            defaultValue: true,
        },
    };
}
// Letter spacing
export function tracking() {
    return {
        type: "string",
        label: "Letter Spacing",
        name: "tracking",
        options: [
            { label: "Tighter", value: "tighter" },
            { label: "Tight", value: "tight" },
            { label: "Normal", value: "normal" },
            { label: "Wide", value: "wide" },
            { label: "Wider", value: "wider" },
            { label: "Widest", value: "widest" },
        ],
        ui: {
            defaultValue: true,
        },
    };
}
// Text Align
export function textAlign() {
    return {
        type: "string",
        label: "Text Align",
        name: "align",
        options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
            { label: "Justify", value: "justify" },
            { label: "Start", value: "start" },
            { label: "End", value: "end" },
        ],
        ui: {
            defaultValue: true,
        },
    };
}
// Text Decoration
export function decoration() {
    return {
        type: "string",
        label: "Text Align",
        name: "decoration",
        options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
            { label: "Justify", value: "justify" },
            { label: "Start", value: "start" },
            { label: "End", value: "end" },
        ],
        ui: {
            defaultValue: true,
        },
    };
}
// Text Color
export function textColor() {
    return {
        type: "string",
        name: "color",
        label: "Text color",
        ui: {
            component: "color",
            colorFormat: "hex",
            colors: [...Object.values(colorObject)],
            widget: "block",
        },
    };
}

export function font(title?: string, description?: string) {
    return {
        type: "object",
        name: "font",
        label: title || "Font",
        description:
            description ||
            "Adjust font size, weight, height, spacing and color.",
        fields: [
            textColor(),
            fontFamily(),
            fontSize(),
            fontWeight(),
            leading(),
            tracking(),
            textAlign(),
            decoration(),
        ],
    };
}
