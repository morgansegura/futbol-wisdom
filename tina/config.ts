import { defineConfig } from "tinacms";
import { page } from "./fields/collections/page";
import { post } from "./fields/collections/post";
import { global } from "./fields/collections/global";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
    branch,
    clientId: `${process.env.tinaClientId}`,
    token: `${process.env.tinaToken}`,

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "media",
            publicFolder: "public",
        },
    },
    schema: {
        // @ts-ignore
        collections: [page(), global()],
    },
});
