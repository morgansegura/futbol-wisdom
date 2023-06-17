export function navItem() {
    return [
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
}

export function subnavItem() {
    return {
        name: "subnav",
        label: "Submenu Nav Item",
        type: "object",
        list: true,
        fields: navItem(),
    };
}

export function dropdownNavitem() {
    return {
        type: "string",
        name: "dropdown",
        label: "Dropdown Nav Item",
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
            subnavItem(),
        ],
    };
}
export function navlist(title?: string, description?: string) {
    return {
        type: "object",
        name: "nav",
        label: title || "Navigation",
        description: description || "Navigation",
        list: true,
        templates: [Object.assign(dropdownNavitem(), ...navItem())],
        ui: {
            // Don't allow editors to create new navigation items
            allowedActions: {
                create: false,
                delete: false,
            },
        },
    };
}
