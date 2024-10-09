module.exports = {
  apps: [
    {
      name: 'jre-app',
      port: 80,
      exec_mode: 'cluster',
      instances: 1,
      script: './.output/server/index.mjs'
    }
  ]
}
