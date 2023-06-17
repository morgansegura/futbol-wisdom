import { ReactNode } from "react";

export type TContentType = {
    header?: any[];
    footer?: any[];
    page?: any[];
    post?: any[];
    tag?: any[];
    author?: any[];
};

export interface IContent {
    className?: string;
    contentId?: string;
    data: any;
    hasWrapper?: boolean;
    contentType: keyof TContentType;
}
