import { mono, sans, serif } from "./fonts";
// [Hooks]
import { useGlobalData } from "@hooks/useData";

// [Components]
import Header from "@app/components/header/Header";
import Footer from "@app/components/footer/Footer";

// [Assets]
import clsx from "clsx";
import "@styles/globals.scss";
import s from "./layout.module.scss";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const global = await useGlobalData();

    return (
        <>
            <html
                lang="en"
                className={clsx(mono.variable, sans.variable, serif.variable)}
            >
                <body>
                    <div className={s.wrapper}>
                        <Header data={global} />
                        <main className={s.main}>{children}</main>
                        <Footer data={global} />
                    </div>
                    <div id="root"></div>
                </body>
            </html>
        </>
    );
}
