/** @jsx jsx */
import {jsx, css, Global} from '@emotion/core'
import sourcesObject from '../lib/sources-errata-object'
import Content from './content'
import Card from './card'

const ScreenshotContent = ({permalink, permalinks}) => (
  <>
    <Global
      styles={css`
        body {
          padding: 0.5rem;
        }
      `}
    />
    {permalinks ? (
      permalinks.map((permalink, i) => (
        <Card key={permalink} isLast={i === permalinks.length - 1}>
          <Content hideFooter {...sourcesObject[permalink]} />
        </Card>
      ))
    ) : (
      <Card isLast>
        <Content hideFooter {...sourcesObject[permalink]} />
      </Card>
    )}
  </>
)

export default ScreenshotContent
