/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "vercel",
    basePath: "",
    assetPrefix: ""
  }
}

module.exports = nextConfig
