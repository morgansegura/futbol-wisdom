"use client";

import { useTina } from "tinacms/dist/react";

export function useTinaClient(props: any) {
    const { data, isClient } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    return data ? { data, isClient } : {};
}
