"use client";
import { useRef, useState } from "react";

import clsx from "clsx";
import { useTinaClient } from "@hooks/useTinaClient";
// [Components]
import Container from "@components/container/Container";
// [Styles]
import s from "@components/footer/Footer.module.scss";

import Typography from "@components/typography/Typography";
import { useClickAway } from "react-use";
import Logo from "@components/logo/Logo";
import Navigation from "@components/navigation/Navigation";
import { tinaField } from "tinacms/dist/react";

interface FooterProps {
    data?: any;
}

export default function Footer({ data: footerData }: FooterProps) {
    const { data } = useTinaClient(footerData);

    const globalData = data?.settings;

    console.log({ globalData });

    function SubscribeForm() {
        const [active, setActive] = useState<boolean>(false);
        const inputRef = useRef<any>(null);

        function handleIntputFocus(bool: boolean) {
            setActive(bool);
        }

        useClickAway(inputRef, (e: any) => {
            setActive(false);
        });

        return (
            globalData?.footer?.subscribeForm && (
                <div className={s.subscribe__form}>
                    {globalData?.footer?.subscribeForm?.slogan && (
                        <Typography
                            className={s.slogan}
                            component="h4"
                            // family="serif"
                            height="normal"
                            size="lg"
                        >
                            {globalData?.footer?.subscribeForm?.slogan}
                        </Typography>
                    )}
                    <form className={s.form}>
                        <div className={s.control}>
                            <label
                                className={clsx(s.label, active && s.active)}
                            >
                                {globalData?.footer?.subscribeForm?.fieldLabel}
                            </label>
                            <input
                                ref={inputRef}
                                onFocus={() => handleIntputFocus(true)}
                                className={clsx(
                                    s.text__input,
                                    active && s.active
                                )}
                                placeholder="Enter your email"
                            />
                        </div>
                        <button className={s.submit}>
                            {globalData?.footer?.subscribeForm?.buttonLabel}
                        </button>
                    </form>
                    {globalData?.footer?.subscribeForm?.subSlogan && (
                        <Typography
                            component="p"
                            size="sm"
                            height="loose"
                            weight="light"
                            className={s.copy}
                        >
                            {globalData?.footer?.subscribeForm?.subSlogan}
                        </Typography>
                    )}
                </div>
            )
        );
    }

    return (
        <footer className={s.footer}>
            <div className={s.nav__main__container}>
                <Container>
                    <Navigation
                        className={s["main-nav"]}
                        data={globalData?.settings?.mainnav}
                        dataTinaField={tinaField(
                            globalData?.settings,
                            "mainnav"
                        )}
                        display="list"
                        type="main"
                    />
                </Container>
            </div>
            <Container>
                <Logo
                    className={s["logo"]}
                    path="/"
                    type={globalData?.footer?.logo?.type}
                    initials={globalData?.settings?.logoimage?.initials}
                    name={globalData?.settings?.logoimage?.text}
                    image={globalData?.settings?.logoimage?.image}
                    imageWidth={globalData?.settings?.logoimage?.imageWidth}
                    imageHeight={globalData?.settings?.logoimage?.imageHeight}
                />

                <SubscribeForm />
                {globalData?.settings?.social && (
                    <Navigation
                        className={s["social-nav"]}
                        data={globalData?.settings?.social}
                        dataTinaField={tinaField(
                            globalData?.settings,
                            "social"
                        )}
                        display="list"
                        type="social"
                    />
                )}
                {globalData?.settings?.legal && (
                    <Navigation
                        className={s["legal-nav"]}
                        data={globalData?.settings?.legal}
                        dataTinaField={tinaField(globalData?.settings, "legal")}
                        display="list"
                        type="main"
                    />
                )}
            </Container>
        </footer>
    );
}
