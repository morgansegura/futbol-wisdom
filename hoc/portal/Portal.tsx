import { useState, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";

// [Types]
import { IPortal } from "./Portal.types";

export default function Portal({ children }: IPortal) {
    const [mounted, setMouounted] = useState<boolean>(false);

    useEffect(() => {
        setMouounted(true);

        return () => setMouounted(false);
    }, []);

    return mounted
        ? createPortal(children, document.querySelector("#root") as Element)
        : null;
}
