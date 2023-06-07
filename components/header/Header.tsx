"use client";
import { useTinaClient } from "@hooks/useTinaClient";
import { useState } from "react";
import clsx from "clsx";
// [Components]
import Container from "@components/container/Container";
import Dropdown, {
    DropdownMenu,
    DropdownSelector,
} from "@components/dropdown/Dropdown";

import { GiHamburgerMenu } from "react-icons/gi";

// [Styles]
import s from "./Header.module.scss";

// [Types]
import { IHeader } from "./Header.types";

import Logo from "@components/logo/Logo";
import Navigation from "@components/navigation/Navigation";
import { tinaField } from "tinacms/dist/react";

export default function Header({ data: headerData }: IHeader) {
    const { data } = useTinaClient(headerData);
    // const [active, setActive] = useState<boolean>(false);

    const globalData = data?.settings;

    function DesktopNavigation() {
        return (
            <>
                <Navigation
                    className={clsx(
                        s["desktop-nav"],
                        s["main-nav"],
                        s["is--desktop"]
                    )}
                    data={globalData?.settings?.mainnav}
                    dataTinaField={tinaField(globalData?.settings, "mainnav")}
                    type="main"
                    display="dropdown"
                />
                <Navigation
                    className={clsx(s["desktop-nav"], s["is--desktop"])}
                    data={globalData?.settings?.socialnav}
                    type="social"
                    dataTinaField={tinaField(globalData?.settings, "social")}
                    display="list"
                />
            </>
        );
    }

    function MobileNavigation() {
        return (
            <Dropdown>
                <>
                    <DropdownSelector
                        className={clsx(s.hamburger, s["is--mobile"])}
                    >
                        <GiHamburgerMenu />
                        <DropdownMenu
                            className={s["is--mobile"]}
                            position="bottom-left"
                            animation="fade-slide"
                        >
                            <>
                                <Navigation
                                    className={s["mobile-nav"]}
                                    data={globalData?.settings?.mainnav}
                                    type="main"
                                    dataTinaField={tinaField(
                                        globalData?.settings,
                                        "mainnav"
                                    )}
                                    display="dropdown"
                                />
                                <Navigation
                                    className={s["mobile-nav"]}
                                    data={globalData?.settings?.socialnav}
                                    type="social"
                                    dataTinaField={tinaField(
                                        globalData?.settings,
                                        "social"
                                    )}
                                    display="list"
                                />
                            </>
                        </DropdownMenu>
                    </DropdownSelector>
                </>
            </Dropdown>
        );
    }

    return (
        <header className={s.header}>
            <Container className={s.container}>
                <Logo
                    path="/"
                    type={globalData?.header?.logo?.type}
                    initials={globalData?.settings?.initials}
                    name={globalData?.settings?.name}
                    image={globalData?.settings?.logoimage?.image}
                    imageWidth={globalData?.settings?.logoimage?.imageWidth}
                    imageHeight={globalData?.settings?.logoimage?.imageHeight}
                    dataTinaField={tinaField(globalData, "settings")}
                />

                <DesktopNavigation />
                <MobileNavigation />
            </Container>
        </header>
    );
}
