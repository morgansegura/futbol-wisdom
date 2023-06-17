import { richtextField } from "../elements/richtextField";

export function richtext() {
    return {
        type: "object",
        name: "richtext",
        label: "Rich text",
        fields: [richtextField()],
    };
}
