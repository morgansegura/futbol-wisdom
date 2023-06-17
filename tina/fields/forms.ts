export const simpleSubscribeForm = {
    type: "object",
    name: "subscribeForm",
    label: "Subscribe Form",
    description: "A simple form to get users to subscribe by email.",
    fields: [
        {
            type: "string",
            name: "email",
            label: "Admin email",
            // description: "The admin's email.",
        },
        {
            type: "string",
            name: "title",
            label: "Title",
            // description: "Larger headline text above form.",
        },
        {
            type: "string",
            name: "copy",
            label: "Copy Text",
            // description: "Smaller Text below the form.",
        },
        {
            type: "string",
            name: "placeholder",
            label: "Field Placeholder",
            // description: "Placeholder text. (Example: Enter your email).",
        },
        {
            type: "string",
            name: "submit",
            label: "Button Label",
            // description: "Label for the button (Example: Subscribe).",
        },
    ],
};
