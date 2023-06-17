import { colorObject } from "@tina/fields/variables";

export function filterColors(
    color?: string,
    property?: string
): string | undefined {
    let name: any;
    const colorFilter = Object.entries(colorObject).find(
        (c: any) => c[1].toLowerCase() === color?.toLowerCase()
    );
    if (colorFilter !== undefined) {
        name = colorFilter[0];
    }
    if (!name) return;
    // console.log(`${property}-${name}`);
    return `${property}-${name}`;
}

export function styleProperties(
    item?: string,
    prefix?: string
): string | undefined {
    if (!item) return;
    // console.log(`${prefix}${item}`);
    return `${prefix}${item}`;
}

export function getColorFromMap(check: string) {
    let type: "key" | "value" =
        check?.includes("#") || check?.includes("rgb") ? "value" : "key";

    const filter = Object.entries(colorObject).find((c: any) =>
        type === "key"
            ? c[0].toLowerCase() === check?.toLowerCase()
            : c[1].toLowerCase() === check?.toLowerCase()
    );

    if (filter === undefined || !check) {
        return;
    }

    // console.log("text-", type === "key" ? filter[1] : filter[0]);

    return type === "key" ? filter[1] : filter[0];
}
