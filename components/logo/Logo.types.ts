export type TVariant =
    | "text"
    | "image-text"
    | "image-initials"
    | "image"
    | "initials"
    | "initials-text";

export interface ILogo {
    className?: string;
    dataTinaField?: any;
    image?: string;
    imageWidth?: number;
    imageHeight?: number;
    initials?: string;
    name?: string;
    path?: string;
    type: TVariant;
}
