module.exports = {
  apps: [{
    name: 'ci',
    script: 'dist/src/index.js',
    env: {
      'NODE_ENV': 'development',
    },
    env_production: {
      'NODE_ENV': 'production',
    },
    instances: 2,
    exec_mode: 'cluster',
  }],
}
