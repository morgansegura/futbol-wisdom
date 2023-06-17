import Link from "next/link";
import Image from "next/image";

// [Styles]
import s from "./Logo.module.scss";
// [Styles]
import { ILogo } from "./Logo.types";
import clsx from "clsx";

export default function Logo({
    className,
    dataTinaField,
    image,
    imageWidth,
    imageHeight,
    initials,
    name,
    path = "/",
    logoType,
}: ILogo) {
    return (
        <Link
            href={path}
            className={clsx(s.container, className)}
        >
            <div data-tina-field={dataTinaField}>
                {image && logoType === "image" ? (
                    <div className={s.image}>
                        <Image
                            alt={name || "Logo"}
                            width={imageWidth}
                            height={imageHeight}
                            src={`/${image}`}
                        />
                    </div>
                ) : image && logoType === "image-initials" ? (
                    <>
                        <div className={s.image}>
                            <Image
                                alt={name || "Logo"}
                                width={imageWidth}
                                height={imageHeight}
                                src={`/${image}`}
                            />
                        </div>
                        <span className={s.title}>{initials}</span>
                    </>
                ) : image && logoType === "image-text" ? (
                    <>
                        <div className={s.image}>
                            <Image
                                alt={name || "Logo"}
                                width={imageWidth}
                                height={imageHeight}
                                src={`/${image}`}
                            />
                        </div>
                        <span className={s.text}>{name}</span>
                    </>
                ) : logoType === "initials" || logoType === "image-initials" ? (
                    <span className={s.title}>{initials}</span>
                ) : logoType === "text" || logoType === "image-text" ? (
                    <span className={s.text}>{name}</span>
                ) : logoType === "initials-text" ? (
                    <>
                        <span className={s.title}>{initials}</span>
                        <span className={s.text}>{name}</span>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </Link>
    );
}
