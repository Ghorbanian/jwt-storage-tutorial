module.exports = {
  apps: [
    {
      name: 'front-end',
      cwd: '/path/to/root/directory',
      script: 'npm',
      args: 'run start',
      env: {
        PORT: 3000
      },
    },
  ],
};
