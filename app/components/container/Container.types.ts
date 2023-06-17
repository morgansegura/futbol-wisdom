import { ReactNode } from "react";

export interface IContainer {
    data?: {
        data?: any;
        query?: any;
        variables?: any;
    };
    children?: ReactNode;
    className?: string;
    type?: "page" | "post" | "global";
    variant?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
}
