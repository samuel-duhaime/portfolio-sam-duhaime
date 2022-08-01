/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
   // React strict mode
   reactStrictMode: true,

   // Créer le build à /build
   distDir: "build",

   // Configuration typescript
   typescript: {
      ignoreBuildErrors: false,
   },
};

module.exports = nextConfig;
