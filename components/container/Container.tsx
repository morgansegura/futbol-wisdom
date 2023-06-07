"use client";

// [Styles]
import s from "@components/container/Container.module.scss";
import clsx from "clsx";

// [Types]
import { IContainer } from "./Container.types";

export default function Container({
    children,
    className,
    variant = "xl",
}: IContainer) {
    let width: string;

    switch (variant) {
        case "xs":
            width = s.xs;
            break;
        case "sm":
            width = s.sm;
            break;
        case "md":
            width = s.md;
            break;
        case "lg":
            width = s.lg;
            break;
        case "xl":
            width = s.xl;
            break;
        case "full":
            width = s.full;
            break;
    }

    return (
        <div className={clsx(s.container, width, className)}>{children}</div>
    );
}
