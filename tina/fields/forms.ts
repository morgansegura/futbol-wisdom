export const simpleSubscribeForm = {
    name: "subscribeForm",
    label: "Subscribe Form",
    description: "A simple form to get users to subscribe by email.",
    type: "object",
    _template: "subscribe_form",
    fields: [
        {
            type: "string",
            name: "admin_email",
            label: "Admin email",
            required: true,
            description: "The admin's email.",
        },
        {
            type: "string",
            name: "slogal",
            label: "Slogan",
            description: "Larger headline text above form.",
        },
        {
            type: "string",
            name: "sub_label",
            label: "Sub Slogan",
            description: "Smaller Text below the form.",
        },
        {
            type: "string",
            name: "field_label",
            label: "Label",
            description: "Placeholder text. (Example: Enter your email).",
        },
        {
            type: "string",
            name: "button_label",
            label: "Button Label",
            description: "Label for the button (Example: Subscribe).",
        },
    ],
};
