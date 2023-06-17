import clsx from "clsx";
// [Styles]
import s from "./Icon.module.scss";
// [Types]
import { IIcon, TIcon } from "./Icon.types";
import {
    BsChevronDown,
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsTiktok,
    BsTwitter,
    BsYoutube,
} from "react-icons/bs";

export function getIcon(icon: TIcon) {
    switch (icon) {
        case "chevron":
            return <BsChevronDown />;
        case "facebook":
            return <BsFacebook />;
        case "instagram":
            return <BsInstagram />;
        case "twitter":
            return <BsTwitter />;
        case "youtube":
            return <BsYoutube />;
        case "tiktok":
            return <BsTiktok />;
        case "linkedin":
            return <BsLinkedin />;
    }
}

export default function Icon({ className, icon = "chevron" }: IIcon) {
    return (
        <div className={clsx(s["container"], className)}>{getIcon(icon)}</div>
    );
}
