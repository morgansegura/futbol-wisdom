/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    experimental: { appDir: true },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    async rewrites() {
        return [
            {
                source: "/admin",
                destination: "/admin/index.html",
            },
        ];
    },
    // output: "export",
};

module.exports = nextConfig;
