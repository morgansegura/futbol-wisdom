import clsx from "clsx";
// [Components]
import Box from "@app/components/box/Box";
// [Styles]
import s from "./Button.module.scss";
// [Types]
import { IButton } from "./Button.types";
import Icon from "@app/components/icon/Icon";
import Link from "next/link";

export default function Button({
    children,
    className,
    component,
    dataTinaField,
    iconName,
    iconFirst = "left",
    label,
    onClick,
    path,
    target,
    title,
}: IButton) {
    return path ? (
        <Box
            className={clsx(
                s.selector,
                iconFirst === "left" ? s["icon--left"] : s["icon--right"],
                className
            )}
            component={Link}
            data-title={title}
            dataTinaField={dataTinaField}
            path={path}
            target={target}
        >
            {label && <span className={s["label"]}>{label}</span>}
            {iconName && (
                <span className={s["icon"]}>
                    <Icon icon={iconName} />
                </span>
            )}
            {children}
        </Box>
    ) : (
        <Box
            className={clsx(
                s.selector,
                iconFirst === "left" ? s["icon--left"] : s["icon--right"],
                className
            )}
            component={component}
            data-title={title}
            onClick={onClick}
            target={target}
        >
            {label && <span className={s["label"]}>{label}</span>}
            {iconName && (
                <span className={s["icon"]}>
                    <Icon icon={iconName} />
                </span>
            )}
            {children}
        </Box>
    );
}
