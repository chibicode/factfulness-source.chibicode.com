const withMdx = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
})
const withCSS = require('@zeit/next-css')

const config = withCSS(
  withMdx()
)

module.exports = config
