import { button } from "../components/button";
import { hero } from "../components/hero";
import { richtext } from "../components/richtext";
import { container } from "../layout/container";
import { seo } from "../layout/seo";
import { wrapper } from "../layout/wrapper";

export function pageRouter() {
    return {
        router: ({ document }: any) => {
            if (document._sys.filename === "home") {
                return "/";
            } else {
                return `/${document._sys.filename}`;
            }
        },
    };
}

export function pageContent() {
    return {
        type: "object",
        name: "content",
        label: "Content",
        list: true,
        templates: [richtext(), button(), hero()],
    };
}

export function page() {
    return {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        ui: {
            ...pageRouter(),
        },
        fields: [seo(), wrapper(), container(), pageContent()],
    };
}
