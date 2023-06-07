import { ElementType, ReactNode } from "react";

export interface ISkeleton {
    children?: ReactNode;
    component?: ElementType;
    isClient?: boolean;
    theme?: "light" | "dark";
    variant?: "logo" | "nav__link";
}
