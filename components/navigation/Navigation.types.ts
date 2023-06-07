import { ReactNode } from "react";
import { IButton } from "@components/button/Button.types";
import { TIcon } from "@components/icon/Icon.types";

export interface INavItem extends INavigation {
    iconName?: TIcon;
}

export interface INavigation extends IButton {
    data?: any;
    type?: "main" | "social";
    navItemClass?: string;
    display?: "list" | "dropdown";
}
