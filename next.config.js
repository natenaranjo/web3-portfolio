/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "vercel",
    path: "",
  },
  basePath: "/web3-portfolio",
  assetPrefix: "/web3-portfolio",
}

module.exports = nextConfig
