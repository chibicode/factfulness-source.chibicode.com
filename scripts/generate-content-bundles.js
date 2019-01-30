const fs = require('fs')
const glob = require('glob')

glob('./src/contents/*.mdx', (_, files) => {
  const permalinks = files.map(x =>
    x.replace('./src/contents/', '').replace('.mdx', '')
  )

  const objectKeyValues = permalinks
    .map(
      permalink =>
        `  '${permalink}': dynamic(() => import(/* webpackChunkName: '${permalink}' */ '../contents/${permalink}.mdx'), { loading: () => <DynamicLoading /> })`
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
