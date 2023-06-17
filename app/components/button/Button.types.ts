import { ReactNode } from "react";
import { IBox } from "@app/components/box/Box.types";
import { TIcon } from "@app/components/icon/Icon.types";

export interface IButton extends IBox {
    icon?: ReactNode;
    iconFirst?: "left" | "right";
    iconName?: TIcon;
    label?: string;
    onClick?: () => void;
    path?: string;
    target?: "_blank" | "_self";
    title?: string;
}
