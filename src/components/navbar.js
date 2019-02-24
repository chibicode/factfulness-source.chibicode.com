/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useContext} from 'react'
import useNavCloser from '../hooks/use-nav-closer'
import colors from '../lib/colors'
import groupedPagedSources from '../lib/grouped-paged-sources'
import NavDropdown from './nav-dropdown'
import {NavContext} from './nav-state'
import {ns} from './global-styles'
import Container from './container'
import InternalLink from './internal-link'

const Navbar = () => {
  const handler = useNavCloser()
  const onShowClick = e => {
    e.stopPropagation()
    setDropdownActive(!dropdownActive)
  }

  const {maxVisibleIndex, dropdownActive, setDropdownActive} = useContext(
    NavContext
  )
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
        css={css`
          padding: 0.3rem 0;
          color: #fff;
          background: ${colors.blueGrey400};
          border-bottom: 1px solid ${colors.blueGrey500};
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
            css={css`
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
                background: ${colors.blueGrey300};
              }
              ${ns} {
                margin-left: -0.875rem;
              }
            `}
            onClick={onShowClick}
          >
            {maxVisibleIndex >= 0
              ? groupedPagedSources[maxVisibleIndex][0].section
              : 'ファクトフルネス'}{' '}
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
            <InternalLink
              href="/errata"
              css={css`
                text-decoration: none;
                font-weight: normal;
                &:hover {
                  background: transparent;
                  text-decoration: underline;
                }
              `}
            >
              正誤表
            </InternalLink>
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
