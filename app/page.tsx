// [Hooks]
import { usePageData } from "@hooks/useData";
import Content, { DataWrapper } from "@app/components/content/Content";
import Button from "@components/inputs/button/Button";
import { tinaField } from "tinacms/dist/react";

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
    const rawData = await usePageData(params);
    const pageData = rawData?.data?.page;

    return (
        <DataWrapper
            component="div"
            dataTinaField={tinaField(pageData, "wrapper")}
            data={pageData?.wrapper}
        >
            <Content
                contentId="PageContent"
                contentType="page"
                data={rawData}
            />
        </DataWrapper>
    );
}
