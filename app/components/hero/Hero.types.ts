export type TVariant = "full" | "list" | "grid" | "fixed";

export interface IHero {
    className?: string;
    slides: TSlide[];
    variant?: TVariant;
}

export type TSlide = {
    supertitle?: string;
    title?: string;
    copy?: string;
    image?: any;
    imageUrl?: any;
    link?: any;
};
