module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactiveOdometer',
      externals: {
        react: 'React'
      }
    }
  }
}
