import { ReactNode } from "react";

export interface INavItem {
    label?: string;
    href: string;
    icon?: ReactNode;
    target?: string;
    title?: string;
    type?:
        | "facebook"
        | "instagram"
        | "twitter"
        | "youtube"
        | "tiktok"
        | "linkedin";
}
