module.exports = {
  apps: [
    {
      name: 'jre-app',
      exec_mode: 'cluster',
      instances: 'max',
      script: 'npm',
      args: 'run dev',
      port: 5000
    }
  ]
}
