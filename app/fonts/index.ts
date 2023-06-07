import { Mulish, Noto_Serif } from "next/font/google";

export const sans = Mulish({
    subsets: ["latin"],
    // weight: ["300", "400", "600", "700", "900"],
    display: "swap",
    variable: "--font-sans",
});

export const serif = Noto_Serif({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-serif",
});
