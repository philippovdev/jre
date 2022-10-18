module.exports = {
  apps: [
    {
      name: 'jre-app',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './.output/server/index.mjs',
      args: 'dev',
      port: 5000
    }
  ]
}
