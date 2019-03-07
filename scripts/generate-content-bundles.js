const fs = require('fs')
const glob = require('glob')

glob('./src/{sources,errata}/*.js', (_, files) => {
  const permalinks = files.map(x => x.replace('./src/', '').replace('.js', ''))

  const objectKeyValues = permalinks
    .map(
      permalink =>
        `  '${permalink.replace(
          /(sources|errata)\//g,
          ''
        )}': dynamic(() => import(/* webpackChunkName: '${permalink}' */ '../${permalink}.js'), { loading: () => <DynamicLoading /> })`
    )
    .join(',\n')

  const fileString = `import React from 'react'
import dynamic from 'next/dynamic'

const DynamicLoading = () => '…'

export default {
${objectKeyValues}
}
`

  fs.writeFile('./src/lib/content-bundles.js', fileString, () => {})
})
