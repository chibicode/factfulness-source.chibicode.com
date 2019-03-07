/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useContext} from 'react'
import useNavCloser from '../hooks/use-nav-closer'
import sections from '../lib/sections'
import NavDropdown from './nav-dropdown'
import {NavContext} from './nav-state'
import {ns} from './global-styles'
import Container from './container'
import InternalLink from './internal-link'
import {PageContext} from './page'

const topRightLinkCss = css`
  text-decoration: none;
  font-weight: normal;
  &:hover {
    background: transparent;
    text-decoration: underline;
  }
`

const Navbar = () => {
  const handler = useNavCloser()
  const onShowClick = e => {
    e.stopPropagation()
    setDropdownActive(!dropdownActive)
  }

  const {maxVisibleIndex, dropdownActive, setDropdownActive} = useContext(
    NavContext
  )
  const {type} = useContext(PageContext)
  return (
    <nav
      css={css`
        position: fixed;
        width: 100%;
        top: 0;
        font-weight: bold;
      `}
      onClick={handler}
    >
      <div
        css={({colors}) => css`
          padding: 0.3rem 0;
          color: #fff;
          background: ${colors.base400};
          border-bottom: 1px solid ${colors.base500};
        `}
      >
        <Container
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <button
            type="button"
            css={({colors}) => css`
              background: none;
              cursor: pointer;
              border: none;
              font-weight: bold;
              outline: none;
              color: #fff;
              padding: 0.5rem 0.875rem;
              border-radius: 0.25rem;
              margin-left: 0;
              &:hover {
                background: ${colors.base300};
              }
              ${ns} {
                margin-left: -0.875rem;
              }
            `}
            onClick={onShowClick}
          >
            {maxVisibleIndex >= 0
              ? sections(type)[maxVisibleIndex]
              : sections(type)[0]}{' '}
            <span
              css={css`
                width: 0;
                height: 0;
                display: inline-block;
                margin-top: -3px;
                border-style: solid;
                border-width: 6px 6px 0 6px;
                border-color: #fff transparent transparent transparent;
                vertical-align: middle;
              `}
            />
          </button>
          <div>
            {type === 'errata' ? (
              <InternalLink prefetch href="/" css={topRightLinkCss}>
                ウェブ脚注
              </InternalLink>
            ) : (
              <InternalLink prefetch href="/errata" css={topRightLinkCss}>
                正誤表
              </InternalLink>
            )}
          </div>
        </Container>
      </div>
      {dropdownActive && (
        <NavDropdown
          activeIndex={maxVisibleIndex}
          setDropdownActive={setDropdownActive}
        />
      )}
    </nav>
  )
}

export default Navbar
