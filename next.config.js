/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/old-blog/:blog',
                destination: '/blog/:blog',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
