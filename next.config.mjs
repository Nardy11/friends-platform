const nextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true }, basePath: process.env.GITHUB_PAGES === 'true' ? '/friends-platform' : '' };
export default nextConfig;
