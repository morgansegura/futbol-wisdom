import { heroComponent } from "./components";
import { simpleSubscribeForm } from "./forms";
import { wrapperSettings, containerSettings } from "./settings";

export const richTextField = {
    type: "rich-text",
    name: "richTextField",
    label: "Rich Text",
    description: "Stylized rich text editor.",
};

export const textField = {
    type: "string",
    name: "text",
    label: "Text",
    description: "Stylized text field.",
};

export const contentTemplate = {
    type: "object",
    name: "content",
    label: "Blocks",
    description: "Blocks of content.",
    list: true,
    templates: [
        heroComponent,
        {
            type: "object",
            label: "Content",
            name: "richtext_content",
            template: "__richtext",
            fields: [wrapperSettings, containerSettings, richTextField],
        },
        {
            type: "object",
            label: "Subscribe Block",
            name: "subscribe_component",
            fields: [wrapperSettings, containerSettings, simpleSubscribeForm],
        },
    ],
};
