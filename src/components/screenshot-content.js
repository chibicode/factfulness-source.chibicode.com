/** @jsx jsx */
import {jsx, css, Global} from '@emotion/core'
import sourcesObject from '../lib/sources-errata-object'
import Content from './content'
import Card from './card'

const ScreenshotContent = ({permalink}) => (
  <>
    <Global
      styles={css`
        body {
          padding: 0.5rem;
        }
      `}
    />
    <Card isLast>
      <Content hideFooter {...sourcesObject[permalink]} />
    </Card>
  </>
)

export default ScreenshotContent
