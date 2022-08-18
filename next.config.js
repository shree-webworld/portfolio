/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
            domains: ['github.com', 'i.ibb.co'],
          },
  experimental:
  {
     images: {
                unoptimized: true,
              },
  },          
}

module.exports = nextConfig
