/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    minimumCacheTTL: 31536000,
    domains: ["data.vacancyjobalert.com", "s3.eu-central-003.backblazeb2.com","cdnaws.vacancyjobalert.com","s3.ap-south-1.amazonaws.com",'api.vacancyjobalert.com',"api.vacancyjobalert.com.global.prod.fastly.net", 'server.vacancyjobalert.com', '127.0.0.1', "lh3.googleusercontent.com", "i.pravatar.cc", "tailwindui.com", "sin1.contabostorage.com", "localhost", "1df7b34158320f40e67a0fe217e4ce2c.r2.cloudflarestorage.com"],
  },
}

module.exports = nextConfig
