export function marginOptions() {
    return [
        { label: "None", value: "0" },
        { label: "Auto", value: "auto" },
        { label: "2xs", value: "1" },
        { label: "xs", value: "2" },
        { label: "sm", value: "3" },
        { label: "md", value: "4" },
        { label: "lg", value: "5" },
        { label: "xl", value: "6" },
        { label: "2xl", value: "7" },
        { label: "3xl", value: "8" },
        { label: "4xl", value: "9" },
        { label: "5xl", value: "10" },
        { label: "6xl", value: "11" },
        { label: "6xl", value: "12" },
        { label: "8xl", value: "13" },
        { label: "9xl", value: "14" },
        { label: "10xl", value: "15" },
        { label: "11xl", value: "16" },
        { label: "12xl", value: "17" },
        { label: "13xl", value: "18" },
        { label: "14xl", value: "19" },
        { label: "15xl", value: "20" },
    ];
}
export function paddingOptions() {
    return [
        { label: "None", value: "0" },
        { label: "2xs", value: "1" },
        { label: "xs", value: "2" },
        { label: "sm", value: "3" },
        { label: "md", value: "4" },
        { label: "lg", value: "5" },
        { label: "xl", value: "6" },
        { label: "2xl", value: "7" },
        { label: "3xl", value: "8" },
        { label: "4xl", value: "9" },
        { label: "5xl", value: "10" },
        { label: "6xl", value: "11" },
        { label: "6xl", value: "12" },
        { label: "8xl", value: "13" },
        { label: "9xl", value: "14" },
        { label: "10xl", value: "15" },
        { label: "11xl", value: "16" },
        { label: "12xl", value: "17" },
        { label: "13xl", value: "18" },
        { label: "14xl", value: "19" },
        { label: "15xl", value: "20" },
    ];
}

export function marginY() {
    return {
        type: "string",
        name: "y",
        label: "Margin Top & Margin Bottom",
        options: marginOptions(),
        ui: {
            defaultValue: true,
        },
    };
}

export function marginX() {
    return {
        type: "string",
        name: "x",
        label: "Margin Left & MArgin Right",
        options: marginOptions(),
        ui: {
            defaultValue: true,
        },
    };
}

export function marginTop() {
    return {
        type: "string",
        name: "t",
        label: "Margin Top",
        options: marginOptions(),
        ui: {
            defaultValue: true,
        },
    };
}

export function marginRight() {
    return {
        type: "string",
        name: "r",
        label: "Margin Right",
        options: marginOptions(),
        ui: {
            defaultValue: true,
        },
    };
}

export function marginBottom() {
    return {
        type: "string",
        name: "b",
        label: "Margin Bottom",
        options: marginOptions(),
        ui: {
            defaultValue: true,
        },
    };
}

export function marginLeft() {
    return {
        type: "string",
        name: "l",
        label: "Margin Left",
        options: marginOptions(),
        ui: {
            defaultValue: true,
        },
    };
}

export function paddingY() {
    return {
        type: "string",
        label: "Padding Top & Padding Bottom",
        name: "y",
        options: paddingOptions(),
        ui: {
            defaultValue: true,
        },
    };
}

export function paddingX() {
    return {
        type: "string",
        label: "Padding Left and Padding Right",
        name: "x",
        options: paddingOptions(),
        ui: {
            defaultValue: true,
        },
    };
}

export function paddingTop() {
    return {
        type: "string",
        label: "Padding Top",
        name: "t",
        options: paddingOptions(),
        ui: {
            defaultValue: true,
        },
    };
}

export function paddingRight() {
    return {
        type: "string",
        label: "Padding Right",
        name: "r",
        options: paddingOptions(),
        ui: {
            defaultValue: true,
        },
    };
}

export function paddingBottom() {
    return {
        type: "string",
        label: "Padding Bottom",
        name: "b",
        options: paddingOptions(),
        ui: {
            defaultValue: true,
        },
    };
}

export function paddingLeft() {
    return {
        type: "string",
        label: "Padding Left",
        name: "l",
        options: paddingOptions(),
        ui: {
            defaultValue: true,
        },
    };
}

export function margin() {
    return {
        type: "object",
        name: "m",
        label: "Margin",
        fields: [
            marginY(),
            marginX(),
            marginTop(),
            marginRight(),
            marginBottom(),
            marginLeft(),
        ],
    };
}
export function padding() {
    return {
        type: "object",
        name: "p",
        label: "Padding",
        fields: [
            paddingY(),
            paddingX(),
            paddingTop(),
            paddingRight(),
            paddingBottom(),
            paddingLeft(),
        ],
    };
}

export function spacing(title?: string, description?: string) {
    return {
        type: "object",
        name: "sizing",
        label: title || "Sizing",
        description: description || "Add padding and/or margin.",
        fields: [margin(), padding()],
    };
}
