import { ElementType, ReactNode } from "react";

export interface IDropdownSelector {
    children: ReactNode;
    className?: string;
    component?: ElementType;
}

export interface IDropdownMenu {
    children: ReactNode;
    className?: string;
    position?:
        | "top-left"
        | "top-center"
        | "top-right"
        | "middle-left"
        | "middle-center"
        | "middle-right"
        | "bottom-left"
        | "bottom-center"
        | "bottom-right";
    animation?: "fade" | "slide" | "fade-slide";
}

export interface IDropdown {
    children: ReactNode;
    className?: string;
}
