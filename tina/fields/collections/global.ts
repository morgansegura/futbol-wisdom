import { container } from "../layout/container";
import { logoOptions } from "../layout/logo";
import { site } from "../layout/site";
import { wrapper } from "../layout/wrapper";
import { navlist } from "../navigation";

export function global() {
    return {
        name: "settings",
        label: "Global Features",
        path: "content/settings",
        format: "mdx",
        // ui: {
        //     global: false,
        // },
        fields: [
            {
                type: "object",
                name: "settings",
                label: "Site Settings",
                description: "Setup site features.",
                fields: [...site()],
            },
            {
                type: "object",
                name: "header",
                label: "Header",
                description: "Stylize the header for this site.",
                fields: [wrapper(), container(), logoOptions(), navlist()],
            },
            {
                type: "object",
                name: "footer",
                label: "Footer",
                description: "Stylize the footer for this site.",
                fields: [wrapper(), container(), logoOptions(), navlist()],
            },
        ],
    };
}
