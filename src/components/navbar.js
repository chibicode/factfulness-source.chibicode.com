/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import colors from '../lib/colors'
import Container from './container'
import NavSection from './nav-section'
import NavPageNumber from './nav-page-number'

const Navbar = () => (
  <nav
    css={css`
      position: fixed;
      width: 100%;
      top: 0;
      font-weight: bold;
      color: ${colors.blueGrey800};
      background: ${colors.blueGrey100};
      border-bottom: 1px solid ${colors.blueGrey200};
    `}
  >
    <Container
      css={css`
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <NavSection />
      <NavPageNumber />
    </Container>
  </nav>
)

export default Navbar
