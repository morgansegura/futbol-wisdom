export const basicNavItem: any = [
    {
        type: "string",
        name: "path",
        label: "Path",
        description: "Path this link will navigate to.",
    },
    {
        type: "string",
        name: "label",
        label: "Label",
        description: "Visual label for this link.",
    },
    {
        type: "string",
        name: "title",
        label: "Title",
        description: "Title attribute for this link.",
    },
    {
        type: "string",
        name: "target",
        label: "Target",
        description: "Choose how this link will open.",
        options: [
            {
                label: "Default",
                value: "_self",
            },
            {
                label: "Open in new Tab.",
                value: "_blank",
            },
        ],
        ui: {
            defaultValue: "default",
        },
    },
];

export const subNavItem = {
    name: "subnav",
    label: "Submenu Nav Item",
    type: "object",
    list: true,
    fields: basicNavItem,
};

export const defaultNavItem = {
    type: "string",
    name: "default",
    label: "Basic Nav Item",
    description: "",
    fields: [
        {
            type: "string",
            name: "path",
            label: "Path",
            description: "Path this link will navigate to.",
            // required: true,
        },
        {
            type: "string",
            name: "label",
            label: "Label",
            description: "Visual label for this link.",
        },
        {
            type: "string",
            name: "title",
            label: "Title",
            description: "Title attribute for this link.",
        },
        {
            type: "string",
            name: "target",
            label: "Target",
            description: "Choose how this link will open.",
            options: [
                {
                    label: "Default",
                    value: "_self",
                },
                {
                    label: "Open in new Tab.",
                    value: "_blank",
                },
            ],
            ui: {
                defaultValue: "default",
            },
        },
    ],
};

export const dropdownNavItem = {
    type: "string",
    name: "dropdown",
    label: "Dropdown Nav Item",
    description: "",
    fields: [
        {
            type: "string",
            name: "label",
            label: "Label",
            description: "Visual label for this link.",
        },
        {
            type: "string",
            name: "title",
            label: "Title",
            description: "Title attribute for this link.",
        },
        {
            type: "string",
            name: "position",
            label: "Submenu Position",
            description: "Position of the dropdown menu.",
            options: [
                { label: "Top Left", value: "top-left" },
                { label: "Top Center", value: "top-center" },
                { label: "Top Right", value: "top-right" },
                { label: "Middle Left", value: "middle-left" },
                { label: "Middle Center", value: "middle-center" },
                { label: "Middle Right", value: "middle-right" },
                { label: "Bottom Left", value: "bottom-left" },
                { label: "Bottom Center", value: "bottom-center" },
                { label: "Bottom Right", value: "bottom-right" },
            ],
            ui: {
                component: "select",
                defaultValue: "Bottom Center",
            },
        },
        {
            type: "string",
            name: "animation",
            label: "Submenu Animation",
            description: "The animation effect of the dropdown menu.",
            options: [
                { label: "Fade", value: "fade" },
                { label: "Slide", value: "slide" },
                { label: "Fade and Slide", value: "fade-slide" },
            ],
            ui: {
                component: "select",
                defaultValue: "Slide",
            },
        },
        subNavItem,
    ],
};

export const socialNav = {
    type: "object",
    name: "social",
    label: "Social Media Navigation",
    list: true,
    description: "Setup social media navigation with icons.",
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
        ...basicNavItem,
    ],
};

export const legalNav = {
    type: "object",
    name: "legal",
    label: "Legal Navigation",
    description:
        "Setup legal navigation. (Term of Service, Privacy Policy, etc.)",
    list: true,
    fields: [...basicNavItem],
};

export const navigationList = {
    type: "object",
    name: "mainnav",
    label: "Navigation",
    list: true,
    templates: [defaultNavItem, dropdownNavItem],
    ui: {
        // Don't allow editors to create new navigation items
        allowedActions: {
            create: false,
            delete: false,
        },
    },
};
