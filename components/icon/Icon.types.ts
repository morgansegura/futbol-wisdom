export type TIconType = "social" | "default";
export type TIcon =
    | "facebook"
    | "instagram"
    | "linkedin"
    | "twitter"
    | "youtube"
    | "tiktok"
    | "chevron";

export interface IIcon {
    className?: string;
    icon?: TIcon;
    type?: TIconType;
}
