/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
    basePath: "/web3-portfolio",
    assetPrefix: "/web3-portfolio",
}

module.exports = nextConfig
