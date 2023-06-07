import { Fragment } from "react";
import clsx from "clsx";
// [Components]
import Button from "@components/button/Button";
import Dropdown, {
    DropdownMenu,
    DropdownSelector,
} from "@components/dropdown/Dropdown";
// [Styles]
import s from "./Navigation.module.scss";
// [Types]
import { INavigation, INavItem } from "./Navigation.types";
import { tinaField } from "tinacms/dist/react";
import Typography from "@components/typography/Typography";

export default function Navigation({
    className,
    navItemClass,
    data,
    dataTinaField,
    display,
    type,
}: INavigation) {
    return (
        <nav className={clsx(s[`${type}-nav`], className)}>
            {data &&
                data?.map((item: any, i: number) => (
                    <div
                        key={i}
                        data-tina-field={dataTinaField}
                    >
                        {item?.subnav ? (
                            display === "dropdown" ? (
                                <Dropdown>
                                    <DropdownSelector>
                                        <Button
                                            className={navItemClass}
                                            icon={item.icon}
                                            iconName={"chevron"}
                                            iconFirst={"right"}
                                            onClick={item.onClick}
                                            label={item.label}
                                            target={item.target}
                                            title={item.title}
                                            dataTinaField={tinaField(
                                                item,
                                                "label"
                                            )}
                                        />
                                        <DropdownMenu
                                            className={clsx(s["menu"])}
                                            position={item.position}
                                            animation={item.animation}
                                        >
                                            {item?.subnav?.map(
                                                (
                                                    subitem: INavItem,
                                                    j: number
                                                ) => (
                                                    <Button
                                                        key={j}
                                                        path={subitem.path}
                                                        icon={subitem.icon}
                                                        iconName={
                                                            subitem.iconName
                                                        }
                                                        dataTinaField={tinaField(
                                                            subitem,
                                                            "label"
                                                        )}
                                                        iconFirst={
                                                            subitem.iconFirst
                                                        }
                                                        label={subitem.label}
                                                        onClick={
                                                            subitem.onClick
                                                        }
                                                        target={subitem.target}
                                                        title={subitem.title}
                                                    />
                                                )
                                            )}
                                        </DropdownMenu>
                                    </DropdownSelector>
                                </Dropdown>
                            ) : (
                                <>
                                    <Typography
                                        className={s["nav-title"]}
                                        component="h5"
                                        dataTinaField={tinaField(item, "label")}
                                        height="loose"
                                        size="sm"
                                        weight="light"
                                    >
                                        {item.label}
                                    </Typography>

                                    {item?.subnav?.map(
                                        (subitem: INavItem, j: number) => (
                                            <Button
                                                key={j}
                                                dataTinaField={tinaField(
                                                    subitem,
                                                    "label"
                                                )}
                                                icon={subitem.icon}
                                                iconName={subitem.iconName}
                                                iconFirst={subitem.iconFirst}
                                                label={subitem.label}
                                                onClick={subitem.onClick}
                                                path={subitem.path}
                                                target={subitem.target}
                                                title={subitem.title}
                                            />
                                        )
                                    )}
                                </>
                            )
                        ) : (
                            <Fragment key={i}>
                                <Button
                                    icon={item.icon}
                                    iconName={item.iconName}
                                    iconFirst={item.iconFirst}
                                    label={item.label}
                                    onClick={item.onClick}
                                    path={item.path}
                                    target={item.target}
                                    title={item.title}
                                />
                            </Fragment>
                        )}
                    </div>
                ))}
        </nav>
    );
}
