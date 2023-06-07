import client from "@tina/__generated__/client";

export async function usePageData(params: any) {
    const slug = !params?.slug ? "home" : params.slug;
    const path = { relativePath: `${slug}.mdx` };

    const { data, query, variables } = await client.queries.page({
        ...path,
    });

    if (!data) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return {
        data,
        query,
        variables,
    };
}

export async function usePostData(params: any) {
    const { slug } = params;
    const path = { relativePath: `${slug}.mdx` };

    const { data, query, variables } = await client?.queries?.post({
        ...path,
    });

    if (!data) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return {
        data,
        query,
        variables,
    };
}

export async function useGlobalData() {
    const path = { relativePath: `index.mdx` };

    const props = await client?.queries?.settings({
        ...path,
    });

    if (!props) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return props;
}
