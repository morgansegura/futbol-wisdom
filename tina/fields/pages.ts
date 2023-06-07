import { contentTemplate } from "./content";
import { seoSettings } from "./settings";

export const pageUI = {
    router: ({ document }: any) => {
        if (document._sys.filename === "home") {
            return "/";
        } else {
            return `/${document._sys.filename}`;
        }
    },
};

export const pageFields: any = [seoSettings, contentTemplate];
