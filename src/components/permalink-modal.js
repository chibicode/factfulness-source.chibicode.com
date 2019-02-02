/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Router from 'next/router'
import colors from '../lib/colors'
import {pagedSourcesObject} from '../lib/sources'
import Container from './container'
import Content from './content'
import Card from './card'

const clickHandler = event => {
  event.preventDefault()
  if (event.target === event.currentTarget) {
    Router.push('/')
  }
}

const Modal = ({permalink}) => (
  <section
    css={css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${colors.grey900alpha};
      z-index: 2;
    `}
    onClick={clickHandler}
  >
    <Container>
      <Card isLast>
        <Content isModal {...pagedSourcesObject[permalink]} />
      </Card>
    </Container>
  </section>
)

export default Modal
