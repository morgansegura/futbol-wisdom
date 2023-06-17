"use client";
import { useState, useLayoutEffect } from "react";

// [Styles]
import s from "./Ripple.module.scss";

// [Types]
import { IRipple } from "./Ripple.types";

const useDebouncedRippleCleanUp = (
    rippleCount: number,
    duration: number,
    cleanUpFunction: () => void
) => {
    useLayoutEffect(() => {
        let bounce: any = null;
        if (rippleCount > 0) {
            clearTimeout(bounce);

            bounce = setTimeout(() => {
                cleanUpFunction();
                clearTimeout(bounce);
            }, duration * 4);
        }

        return () => clearTimeout(bounce);
    }, [rippleCount, duration, cleanUpFunction]);
};

export default function Ripple({ duration = 800 }: IRipple) {
    const [rippleArray, setRippleArray] = useState<any>([]);

    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
        setRippleArray([]);
    });

    const addRipple = (event: {
        currentTarget: { getBoundingClientRect: () => any };
        pageX: number;
        pageY: number;
    }) => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
        const size =
            rippleContainer.width > rippleContainer.height
                ? rippleContainer.width
                : rippleContainer.height;
        const x = event.pageX - rippleContainer.x - size / 2;
        const y = event.pageY - rippleContainer.y - size / 2;
        const newRipple = {
            x,
            y,
            size,
        };
        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <div
            className={s["ripple"]}
            onMouseDown={addRipple}
        >
            {rippleArray.length > 0 &&
                rippleArray.map(
                    (ripple: { y: any; x: any; size: any }, index: string) => {
                        return (
                            <span
                                key={"span" + index}
                                style={{
                                    top: ripple.y,
                                    left: ripple.x,
                                    width: ripple.size,
                                    height: ripple.size,
                                }}
                            />
                        );
                    }
                )}
        </div>
    );
}
