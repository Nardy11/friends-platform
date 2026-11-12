const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // GitHub Pages project sites are served below /<repository-name>.
  // basePath is compiled into every HTML asset and navigation URL.
  basePath: '/friends-platform',
};
export default nextConfig;
