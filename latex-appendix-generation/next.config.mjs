/** @type {import('next').NextConfig} */
const repo = "latex-appendix-generation"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
}

export default nextConfig
