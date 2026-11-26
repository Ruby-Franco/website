/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lint runs separately via `npm run lint`. Next 15.1's built-in lint step
  // can't load ESLint 9.39+ configs ("Cannot serialize key 'parse'").
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
