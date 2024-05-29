/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tumedimgs3.s3.amazonaws.com", "lh3.googleusercontent.com"], // Agrega tu dominio de imágenes aquí
  },
  env: {
    NEXTAUTH_SECRET: "",
    GOOGLE_CLIENT_ID:
      "",
    GOOGLE_CLIENT_SECRET: "",
  },
}

module.exports = nextConfig
