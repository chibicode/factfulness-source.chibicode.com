const withCSS = require('@zeit/next-css')

const config = withCSS({
  exportPathMap(defaultPathMap, {dev, outDir}) {
    if (!dev) {
      require('./scripts/build-sitemap.js')(outDir)
    }

    return defaultPathMap
  }
})

module.exports = config
