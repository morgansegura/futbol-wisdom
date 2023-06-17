import { navlist } from "../navigation";
import { social } from "../navigation/social";
import { logoImage } from "./logo";

export function site(title?: string, description?: string) {
    return [
        {
            type: "string",
            name: "name",
            label: "Site Name Long",
            description: "The long version of your site name.",
            // required: true,
        },
        {
            type: "string",
            name: "initials",
            label: "Site Initials",
            description: "The short version of your site name.",
        },
        logoImage(),
        navlist(),
        social(),
    ];
}
