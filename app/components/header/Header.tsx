"use client";
import clsx from "clsx";
import { tinaField } from "tinacms/dist/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTinaClient } from "@hooks/useTinaClient";
// [Components]
import Dropdown, {
    DropdownMenu,
    DropdownSelector,
} from "@app/components/dropdown/Dropdown";
import { DataWrapper } from "@app/components/content/Content";
import Logo from "@app/components/logo/Logo";

// import Logo from "@app/components/logo/Logo";
import Navigation from "@app/components/navigation/Navigation";
// [Styles]
import s from "./Header.module.scss";
// [Types]
import { IHeader } from "./Header.types";

export default function Header({ data: rawData }: IHeader) {
    const { data } = useTinaClient(rawData);
    const globalData = data?.settings;

    console.log({ globalData });

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
        <DataWrapper
            component="header"
            className={s["header"]}
            dataTinaField={tinaField(globalData?.header, "wrapper")}
            data={globalData?.header?.wrapper}
            hasWrapper={globalData?.header?.wrapper}
            // variant={{ maxw: "full" }}
        >
            <DataWrapper
                className={s["container"]}
                component="div"
                dataTinaField={tinaField(globalData?.header, "container")}
                data={globalData?.header?.container}
                hasWrapper={globalData?.header?.container}
            >
                {globalData?.header?.logo?.logoType !== "none" && (
                    <DataWrapper
                        component="div"
                        dataTinaField={tinaField(
                            globalData?.header?.logo?.container,
                            "container"
                        )}
                        data={globalData?.header?.logo?.container}
                        hasWrapper={globalData?.header?.logo?.container}
                    >
                        <Logo
                            className={s["logo"]}
                            path="/"
                            logoType={globalData?.header?.logo?.logoType}
                            initials={globalData?.settings?.initials}
                            name={globalData?.settings?.name}
                            image={globalData?.settings?.logoimage?.image}
                            imageWidth={
                                globalData?.settings?.logoimage?.imageWidth
                            }
                            imageHeight={
                                globalData?.settings?.logoimage?.imageHeight
                            }
                            dataTinaField={tinaField(
                                globalData?.header,
                                "logo"
                            )}
                        />
                    </DataWrapper>
                )}
            </DataWrapper>
        </DataWrapper>

        // <header className={s.header}>
        //     <Container className={s.container}>
        //         <Logo
        //             path="/"
        //             logoType={globalData?.header?.logo?.type}
        //             initials={globalData?.settings?.initials}
        //             name={globalData?.settings?.name}
        //             image={globalData?.settings?.logoimage?.image}
        //             imageWidth={globalData?.settings?.logoimage?.imageWidth}
        //             imageHeight={globalData?.settings?.logoimage?.imageHeight}
        //             dataTinaField={tinaField(globalData, "settings")}
        //         />

        //         <DesktopNavigation />
        //         <MobileNavigation />
        //     </Container>
        // </header>
    );
}
