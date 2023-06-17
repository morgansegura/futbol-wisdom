// [Styles]
import clsx from "clsx";
import s from "./Skeleton.module.scss";
// [Types]
import { ISkeleton } from "./Skeleton.types";

export default function Skeleton({
    children,
    component = "div",
    isClient = false,
    theme = "light",
    variant = "nav__link",
}: ISkeleton) {
    let t: string; // theme
    let v: string; // variant

    switch (theme) {
        case "dark":
            t = s.dark;
            break;
        default:
            t = s.light;
            break;
    }

    switch (variant) {
        case "logo":
            v = s.logo;
            break;
        case "nav__link":
            v = s.nav__link;
            break;
        default:
            v = s.text;
            break;
    }

    const Component = component;

    return (
        <>
            {isClient ? (
                <>
                    <Component className={clsx(s.skeleton, v, t)}></Component>
                </>
            ) : (
                children
            )}
        </>
    );
}
