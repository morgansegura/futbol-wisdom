// [Hooks]
import { usePostData } from "@hooks/useData";
import Content from "@components/content/Content";

export async function generateMetadata({ params }: any) {
    const content = await usePostData(params);

    return {
        title: content?.data?.post?.seo?.title,
        description: content?.data?.post?.seo?.description,
        image: content?.data?.post?.seo?.image,
        keywords: [content?.data?.post?.seo?.keywords],
    };
}

export default async function Page({ params }: any) {
    const content = await usePostData(params);

    return (
        <Content
            type="post"
            data={content}
        />
    );
}
