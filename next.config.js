/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    minimumCacheTTL: 31536000,
    domains: ["tb.vacancyjobalert.com", "s3.tebi.io","float.o8o8.or11.idrivee2-12.com","data.vacancyjobalert.com", "cdnaws.vacancyjobalert.com", "lh3.googleusercontent.com", "sin1.contabostorage.com", "1df7b34158320f40e67a0fe217e4ce2c.r2.cloudflarestorage.com"],
  },
}

module.exports = nextConfig
