import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import clsx from "clsx";
import Portal from "@hoc/portal/Portal";
// [Styles]
import s from "./Dropdown.module.scss";
// [Types]
import { IDropdown, IDropdownMenu, IDropdownSelector } from "./Dropdown.types";

export const DropdownContext = createContext<
    [active: boolean, setActive: Function]
>([false, Function]);

export function DropdownSelector({
    children,
    className,
    component = "div",
}: IDropdownSelector) {
    const selectorRef = useRef<any>(null);
    const [active, setActive] = useContext(DropdownContext);

    useClickAway(selectorRef, (e: any) => {
        setActive(false);
    });

    const handleActiveState = () => {
        setActive(!active);
    };

    const Component = component;

    return (
        <Component
            className={clsx(
                s.selector,
                active ? s.active : s.inactive,
                className
            )}
            onClick={handleActiveState}
            ref={selectorRef}
        >
            {children}
        </Component>
    );
}

export function DropdownMenu({
    animation,
    children,
    className,
    position,
}: IDropdownMenu) {
    const menuRef = useRef<any>(null);
    const [active, setActive] = useContext(DropdownContext);

    // Close menu on Esc keypress
    useEffect(() => {
        const keyPressBlur = () => {
            setActive(false);
        };
        const close = (e: any) => {
            if (e.keyCode === 27) {
                keyPressBlur();
            }
        };
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, [setActive]);

    // Close menu on Esc keypress
    useEffect(() => {
        const handleCloseOnScroll = () => {
            setActive(false);
        };
        window.addEventListener("scroll", handleCloseOnScroll);

        return () => window.removeEventListener("scroll", handleCloseOnScroll);
    }, [setActive]);

    const pos = position ? s[position] : s["bottom-center"];
    const animate = animation ? s[animation] : s["fade"];

    return (
        // <Portal>
        <div
            ref={menuRef}
            className={clsx(
                s["menu"],
                active ? s["active"] : s["inactive"],
                pos,
                animate,
                className
            )}
        >
            {children}
        </div>
        // </Portal>
    );
}

export default function Dropdown({ children }: IDropdown) {
    const [active, setActive] = useState<boolean>(false);

    return (
        <DropdownContext.Provider value={[active, setActive]}>
            {children}
        </DropdownContext.Provider>
    );
}
