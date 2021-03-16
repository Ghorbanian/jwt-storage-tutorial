module.exports = {
  apps: [
    {
      name: 'back-end',
      cwd: '/path/to/root/directory',
      script: 'node',
      args: 'index.js',
      watch: ['index.js']
    },
  ],
};
