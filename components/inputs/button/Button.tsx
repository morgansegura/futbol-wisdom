import clsx from "clsx";
import { tinaField } from "tinacms/dist/react";
import { getColorFromMap } from "@utils/helpers";
// [Styles]
import s from "./Button.module.scss";
// [Types]
import { IButton } from "./Button.types";
import Ripple from "@components/utils/Ripple";

export default function Button({
    children,
    color = "blue-600",
    disabled,
    elevation,
    ripple,
    focus,
    fullwidth,
    icon,
    size = "md",
    variant = "contained",
    dataTinaField,
}: IButton) {
    const classList = clsx(
        !disabled
            ? s[`${variant}-${getColorFromMap(color)}`]
            : s[`disabled-${variant}-${getColorFromMap(color)}`],
        !ripple && s[`ripple`],
        fullwidth ? s[`fullwidth`] : s[`inline`],
        s[`${size}`]
    );

    return (
        <div
            className={classList}
            data-tina-field={tinaField(dataTinaField, "size")}
        >
            <div className={s["child"]}>{children}</div>
            {!ripple && <Ripple />}
        </div>
    );
}
