module.exports = {
  apps: [
    {
      name: 'web',
      script: './start.js',
      env: {
        HOST: 'localhost',
        PORT: 3000,
      },
    },
  ],
};
