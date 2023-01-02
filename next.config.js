// this file is used for more advanced config for next: https://nextjs.org/docs/api-reference/next.config.js/introduction

/** @type {import('next').NextConfig} */ // not sure what this is, a typescript thing??

const nextConfig = {
  output: "standalone", // we have next build create the standalone directory
  images: { // defines the external domains from which we can load images to use with the next Image component
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**" // this means any path on the host
      }
    ]
  }
}

module.exports = nextConfig