const fs = require('fs')
const glob = require('glob')

glob('./src/contents/*.js', (_, files) => {
  const permalinks = files.map(x =>
    x.replace('./src/contents/', '').replace('.js', '')
  )

  const objectKeyValues = permalinks
    .map(
      permalink =>
        `  '${permalink}': dynamic(() => import(/* webpackChunkName: '${permalink}' */ '../contents/${permalink}.js'), { loading: () => <DynamicLoading /> })`
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
