"use client";
import clsx from "clsx";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
// [Components]
import Typography from "@app/components/typography/Typography";
// [Styles]
import s from "./Hero.module.scss";
// [Types]
import { IHero, TSlide } from "./Hero.types";

export default function Hero({ className, slides, variant }: IHero) {
    return (
        <div className={clsx(s.hero, variant && s[variant], className)}>
            <div className={s.container}>
                {slides?.map((item: TSlide, i: number) => (
                    <div
                        className={s.slide}
                        key={i}
                    >
                        {item.image && variant === "fixed" ? (
                            <div className={s.image}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1000 100"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
                                    ></path>
                                </svg>
                                <Image
                                    alt={item.title || "Hello"}
                                    sizes="(max-width: 750px) 100vw, 750px"
                                    fill
                                    src={`/${item.image}`}
                                />
                            </div>
                        ) : (
                            item.image && (
                                <div
                                    className={s.image}
                                    data-tina-field={tinaField(item, "image")}
                                >
                                    <Image
                                        alt={item.title || "Hello"}
                                        sizes="(max-width: 750px) 100vw, 750px"
                                        width={750}
                                        height={540}
                                        src={`/${item.image}`}
                                    />
                                </div>
                            )
                        )}

                        <div className={s.content}>
                            {item.supertitle && (
                                <Typography
                                    component="span"
                                    family="serif"
                                    size="md"
                                    height="none"
                                    spacing="tight"
                                    className={s.supertitle}
                                    dataTinaField={tinaField(
                                        item,
                                        "supertitle"
                                    )}
                                >
                                    {item.supertitle}
                                </Typography>
                            )}
                            {item.title && (
                                <Typography
                                    component="h1"
                                    dataTinaField={tinaField(item, "title")}
                                    size="7xl"
                                    height="none"
                                    spacing="normal"
                                    weight="black"
                                    className={s.title}
                                >
                                    {item.title}
                                </Typography>
                            )}
                            {item.copy && (
                                <Typography
                                    component="p"
                                    size="lg"
                                    height="snug"
                                    spacing="normal"
                                    weight="normal"
                                    dataTinaField={tinaField(item, "copy")}
                                    className={s.copy}
                                >
                                    {item.copy}
                                </Typography>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
