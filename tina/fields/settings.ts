import { legalNav, navigationList, socialNav } from "./navigation";

export const colorObject = {
    /* Color Rainbow */
    "common-white": "#ffffff",
    "neutral-5": "#f9fafc",
    "neutral-10": "#e4e8ed",
    "neutral-20": "#c1c9d0",
    "neutral-30": "#a4abb7",
    "neutral-40": "#89929e",
    "neutral-50": "#6b7384",
    "neutral-60": "#4f5669",
    "neutral-70": "#3e4054",
    "neutral-80": "#2a2f44",
    "neutral-90": "#181d36",
    "neutral-90-5": "#1b1b1b",
    "common-ebony": "#191a1b",
    "common-black": "#000000",
    "red-5": "#fef8f4",
    "red-10": "#f9e3de",
    "red-20": "#f1b8b5",
    "red-30": "#ea898c",
    "red-40": "#dc6878",
    "red-50": "#be4967",
    "red-60": "#972a4e",
    "red-70": "#751f40",
    "red-80": "#561739",
    "red-90": "#3c0a27",
    "orange-5": "#fefaee",
    "orange-10": "#fae4c4",
    "orange-20": "#efba8d",
    "orange-30": "#e69565",
    "orange-40": "#d67552",
    "orange-50": "#b5543a",
    "orange-60": "#91362e",
    "orange-70": "#742626",
    "orange-80": "#57191f",
    "orange-90": "#3b1113",
    "yellow-5": "#fbf9eb",
    "yellow-10": "#f5e5bd",
    "yellow-20": "#e8c281",
    "yellow-30": "#d99d52",
    "yellow-40": "#cb7d33",
    "yellow-50": "#af5922",
    "yellow-60": "#8d3d17",
    "yellow-70": "#6c2f14",
    "yellow-80": "#502211",
    "yellow-90": "#351609",
    "green-5": "#f2fef0",
    "green-10": "#d3f2cd",
    "green-20": "#97d69c",
    "green-30": "#60bf87",
    "green-40": "#4fa478",
    "green-50": "#3a8060",
    "green-60": "#2b6146",
    "green-70": "#204b3c",
    "green-80": "#173634",
    "green-90": "#0e2227",
    "turqoise-5": "#ecfbfe",
    "turqoise-10": "#b9eff7",
    "turqoise-20": "#87deea",
    "turqoise-30": "#4cc1d1",
    "turqoise-40": "#1f9cad",
    "turqoise-50": "#097d8d",
    "turqoise-60": "#00626f",
    "turqoise-70": "#004d58",
    "turqoise-80": "#00363e",
    "turqoise-90": "#002930",
    "cyan-5": "#effcfc",
    "cyan-10": "#ccf1fa",
    "cyan-20": "#91d1ea",
    "cyan-30": "#69b4e2",
    "cyan-40": "#5496cf",
    "cyan-50": "#3678b4",
    "cyan-60": "#245791",
    "cyan-70": "#1b4575",
    "cyan-80": "#15314f",
    "cyan-90": "#0b2131",
    "blue-5": "#f5fbff",
    "blue-10": "#d9ecfd",
    "blue-20": "#acccfb",
    "blue-30": "#85aaf1",
    "blue-40": "#728ce6",
    "blue-50": "#5869cd",
    "blue-60": "#404ca6",
    "blue-70": "#313c86",
    "blue-80": "#232c61",
    "blue-90": "#131e3f",
    "violet-5": "#f8f9fe",
    "violet-10": "#e6e6fa",
    "violet-20": "#c4c3e8",
    "violet-30": "#aca1dc",
    "violet-40": "#9882d5",
    "violet-50": "#7e62bc",
    "violet-60": "#5d4897",
    "violet-70": "#47347e",
    "violet-80": "#332560",
    "violet-90": "#1d174b",
    "purple-5": "#fdf8ff",
    "purple-10": "#f7e1f5",
    "purple-20": "#e6b6e1",
    "purple-30": "#d791d8",
    "purple-40": "#bd72cb",
    "purple-50": "#9855af",
    "purple-60": "#713c92",
    "purple-70": "#552d7d",
    "purple-80": "#3b1e66",
    "purple-90": "#280f52",
    "tan-5": "#f9f7f1",
    "tan-10": "#efe8db",
    "tan-20": "#d7cab0",
    "tan-30": "#bbaa88",
    "tan-40": "#a3916e",
    "tan-50": "#816f4d",
    "tan-60": "#645537",
    "tan-70": "#504329",
    "tan-80": "#3b311c",
    "tan-90": "#251e11",
    /* Highlight Colors */
    "highlight-yellow-1": "#ffe34f",
    "highlight-yellow-2": "#fff72c",
    "highlight-pink-1": "#ff3dc9",
    "highlight-pink-2": "#e680ff",
    "highlight-orange-1": "#ff8c39",
    "highlight-orange-2": "#ffc046",
    "highlight-blue-1": "#4fdfff",
    "highlight-blue-2": "#54ffd6",
    "highlight-green-1": "#29f83e",
    "highlight-green-2": "#afff2c",
    /* Theme */
    "brand-ice": "#53b2ff",
};

export const widthSettings = {
    type: "string",
    label: "Width",
    name: "width",
    description: "Select the max width of this content.",
    options: [
        { label: "Extra Small", value: "xs" },
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "Extra Large", value: "xl" },
        { label: "Full Width", value: "full" },
    ],
    ui: {
        defaultValue: false,
    },
};

export const topSettings = {
    type: "string",
    label: "Spacing Top",
    name: "top",
    description: "Select spacing for the top of this content.",
    options: [
        { label: "None", value: "none" },
        { label: "Extra Small", value: "xs" },
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "Extra Large", value: "xl" },
    ],
    ui: {
        defaultValue: true,
    },
};

export const bottomSettings = {
    type: "string",
    name: "bottom",
    label: "Spacing Bottom",
    description: "Adds spacing to the bottom of the content.",
    options: [
        { label: "None", value: "none" },
        { label: "Extra Small", value: "xs" },
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "Extra Large", value: "xl" },
    ],
    ui: {
        defaultValue: true,
    },
};

export const leftSettings = {
    type: "string",
    name: "left",
    label: "Spacing Left",
    description: "Adds spacing to the left of the content.",
    options: [
        { label: "None", value: "none" },
        { label: "Extra Small", value: "xs" },
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "Extra Large", value: "xl" },
    ],
    ui: {
        defaultValue: true,
    },
};

export const rightSettings = {
    type: "string",
    label: "Spacing Right",
    name: "right",
    description: "Adds spacing to the right of the content.",
    options: [
        { label: "None", value: "none" },
        { label: "Extra Small", value: "xs" },
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "Extra Large", value: "xl" },
    ],
    ui: {
        defaultValue: true,
    },
};

export const roundedSettings = {
    type: "string",
    name: "rounded",
    label: "Rounded Edges",
    description: "Adds rounded edges.",
    options: [
        { label: "None", value: "none" },
        { label: "Extra Small", value: "xs" },
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "Extra Large", value: "xl" },
        { label: "Full Circle", value: "circle" },
    ],
    ui: {
        defaultValue: true,
    },
};

export const bgcolorSettings = {
    type: "string",
    name: "bgcolor",
    label: "Background color",
    description: "Choose a background color.",
    ui: {
        component: "color",
        colorFormat: "hex",
        colors: [...Object.values(colorObject)],
        widget: "block",
    },
};

export const textcolorSettings = {
    type: "string",
    name: "textcolor",
    label: "Text color",
    description: "Choose a text color.",
    ui: {
        component: "color",
        colorFormat: "hex",
        colors: [...Object.values(colorObject)],
        widget: "block",
    },
};

export const bordercolorSettings = {
    type: "string",
    label: "Border color",
    description: "Choose a border color.",
    name: "bordercolor",
    ui: {
        component: "color",
        colorFormat: "hex",
        colors: [...Object.values(colorObject)],
        widget: "block",
    },
};

export const spacingSettings = {
    type: "object",
    name: "spacing",
    label: "Spacing",
    description: "Adjust the spacing of the content.",
    fields: [topSettings, bottomSettings, rightSettings, leftSettings],
};

export const wrapperSettings = {
    type: "object",
    name: "wrapperSettings",
    label: "Wrapper Settings",
    description: "Stylize the wrapper of this content.",
    fields: [widthSettings, spacingSettings, roundedSettings, bgcolorSettings],
};

export const containerSettings = {
    type: "object",
    name: "containerSettings",
    label: "Container Settings",
    description: "Stylize the container of this content.",
    fields: [
        widthSettings,
        spacingSettings,
        roundedSettings,
        textcolorSettings,
        bgcolorSettings,
    ],
};

export const seoSettings = {
    type: "object",
    name: "seo",
    label: "Config Settings",
    description: "SEO is a crucial part of your web application.",
    fields: [
        {
            type: "string",
            name: "url",
            label: "Page URL or Path",
            description: "The location of this page.",
        },
        {
            type: "string",
            name: "unique",
            label: "Unique Name",
            description: "This name should be unique (home, about).",
        },
        {
            type: "string",
            name: "title",
            label: "SEO Title",
            description: "The SEO content title.",
        },
        {
            type: "string",
            name: "description",
            label: "Meta Description",
            description: "The SEO content title.",
        },
        {
            type: "string",
            name: "keywords",
            label: "Meta Keywords",
            description: "A list of comma separated keywords.",
        },
        {
            type: "image",
            name: "image",
            label: "Meta Image",
            description: "Upload an image from your computer.",
            ui: {
                parse(value: any) {
                    return value.startsWith("/") ? value.slice(1) : value;
                },
            },
        },
    ],
};

export const logoSettings = {
    type: "object",
    name: "logo",
    label: "Logo",
    description: "Choose your logo style.",
    fields: [
        {
            type: "string",
            name: "type",
            label: "Logo type",
            description: "Select the type of logo to display.",
            options: [
                { label: "None", value: "none" },
                { label: "Text", value: "text" },
                { label: "Initials", value: "initials" },
                { label: "Image", value: "image" },
                { label: "Initials and Text", value: "initials-text" },
                { label: "Image and Text", value: "image-text" },
                { label: "Image and Initials", value: "image-initials" },
            ],
        },
    ],
    ui: {
        defaultValue: true,
    },
};

export const siteSettings: any = [
    {
        type: "string",
        name: "name",
        label: "Site Name Long",
        description: "The long version of your site name.",
        required: true,
    },
    {
        type: "string",
        name: "initials",
        label: "Site Iniatials",
        description: "The short version of your site name.",
    },
    {
        type: "object",
        name: "logoimage",
        label: "Logo Image",
        description: "Add a logo image.",
        fields: [
            {
                type: "image",
                name: "image",
                label: "Logo Image",
                description: "Upload an image from your computer.",
                ui: {
                    parse(value: any) {
                        return value.startsWith("/") ? value.slice(1) : value;
                    },
                },
            },
            {
                type: "number",
                name: "imageWidth",
                label: "Logo width",
                description: "The logo image width.",
            },
            {
                type: "number",
                name: "imageHeight",
                label: "Logo height",
                description: "The logo image height.",
            },
        ],
    },
    navigationList,
    socialNav,
    legalNav,
];

export const pageSettings: any = [
    {
        type: "string",
        name: "page_title",
        label: "Page Title",
        description: "This is the title of your site.",
    },
];
