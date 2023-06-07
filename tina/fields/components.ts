import { imageFields } from "./media";
import { wrapperSettings } from "./settings";

export const heroComponent = {
    type: "object",
    name: "hero",
    label: "Hero",
    fields: [
        wrapperSettings,
        {
            type: "string",
            name: "variant",
            label: "Hero Type",
            description: "Select hero type.",
            options: [
                { label: "Full Width", value: "full" },
                { label: "Hero with List", value: "list" },
                { label: "Grid Hero", value: "grid" },
                { label: "Fixed Hero", value: "fixed" },
            ],
            defaultValue: "full",
        },
        {
            type: "object",
            name: "slides",
            label: "Slides",
            list: true,
            fields: [
                {
                    type: "string",
                    name: "supertitle",
                    label: "Super Title",
                },
                {
                    type: "string",
                    name: "title",
                    label: "Title",
                },
                {
                    type: "string",
                    name: "copy",
                    label: "Copy",
                },
                ...imageFields,
            ],
        },
    ],
};
