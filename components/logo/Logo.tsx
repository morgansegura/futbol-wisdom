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
    type,
}: ILogo) {
    return (
        <Link
            href={path}
            className={clsx(s.container, className)}
        >
            <div data-tina-field={dataTinaField}>
                {image && type === "image" ? (
                    <div className={s.image}>
                        <Image
                            alt={name || "Logo"}
                            width={imageWidth}
                            height={imageHeight}
                            src={`/${image}`}
                        />
                    </div>
                ) : image && type === "image-initials" ? (
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
                ) : image && type === "image-text" ? (
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
                ) : type === "initials" || type === "image-initials" ? (
                    <span className={s.title}>{initials}</span>
                ) : type === "text" || type === "image-text" ? (
                    <span className={s.text}>{name}</span>
                ) : type === "initials-text" ? (
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
