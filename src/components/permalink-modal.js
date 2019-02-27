/** @jsx jsx */
import {jsx, css, Global} from '@emotion/core'
import pagedSourcesObject from '../lib/paged-sources-object'
import Container from './container'
import Content from './content'
import Card from './card'

const Modal = ({permalink}) => (
  <section
    css={({colors}) => css`
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: ${colors.base900alpha};
      z-index: 1;
      overflow-y: auto;
    `}
  >
    <Global
      styles={[
        css`
          body {
            overflow: hidden;
          }
        `
      ]}
    />
    <Container hasVerticalPadding>
      <Card isLast>
        <Content isModal {...pagedSourcesObject[permalink]} />
      </Card>
    </Container>
  </section>
)

export default Modal
