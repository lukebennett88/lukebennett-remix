module.exports = {
  apps: [
    {
      name: 'Vercel',
      script: 'npm run dev:vercel',
      node_args: '-r dotenv/config',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'CSS',
      script: 'npm run dev:css',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'Remix',
      script: 'npm run dev:remix',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
