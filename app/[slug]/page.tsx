// [Hooks]
import { usePageData } from "@hooks/useData";
import Content from "@components/content/Content";

export async function generateMetadata({ params }: any) {
    const content = await usePageData(params);

    return {
        title: content?.data?.page?.seo?.title,
        description: content?.data?.page?.seo?.description,
        image: content?.data?.page?.seo?.image,
        keywords: [content?.data?.page?.seo?.keywords],
    };
}

export default async function Page({ params }: any) {
    const content = await usePageData(params);

    return (
        <Content
            type="page"
            data={content}
        />
    );
}
