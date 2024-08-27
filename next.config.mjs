/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['firebasestorage.googleapis.com', 'res.cloudinary.com'], // Add the domain of your image provider her
    },
  };
  
  export default nextConfig;
  