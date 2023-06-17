import { navItem } from ".";

export function social(title?: string, description?: string) {
    return {
        type: "object",
        name: "social",
        label: title || "Social Media Navigation",
        list: true,
        description: description || "Setup social media navigation with icons.",
        fields: [
            {
                type: "string",
                component: "select",
                name: "iconName",
                label: "Icon Type",
                options: [
                    { label: "facebook", value: "facebook" },
                    { label: "instagram", value: "instagram" },
                    { label: "linkedin", value: "linkedin" },
                    { label: "twitter", value: "twitter" },
                    { label: "tiktok", value: "tiktok" },
                    { label: "youtube", value: "youtube" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            {
                type: "string",
                name: "iconFirst",
                label: "Icon Position",
                description: "The position the icon is on.",
                options: [
                    { label: "Left", value: "left" },
                    { label: "Right", value: "right" },
                ],
                ui: {
                    defaultValue: true,
                },
            },
            ...navItem(),
        ],
    };
}
