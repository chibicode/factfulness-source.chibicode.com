const fs = require('fs')
const path = require('path')
const sm = require('sitemap')

module.exports = outputPath => {
  const sitemap = sm.createSitemap({
    hostname: 'https://jp.chibicode.com',
    urls: [
      {
        url: ''
      },
      {
        url: '/errata'
      }
    ]
  })

  fs.writeFileSync(path.join(outputPath, 'sitemap.xml'), sitemap.toString())
}
