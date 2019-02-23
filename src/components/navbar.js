/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useContext, useState} from 'react'
import colors from '../lib/colors'
import groupedPagedSources from '../lib/grouped-paged-sources'
import NavDropdown from './nav-dropdown'
import {NavContext} from './nav-state'

const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(false)
  const {maxVisibleIndex} = useContext(NavContext)
  return (
    <nav
      css={css`
        position: fixed;
        width: 100%;
        top: 0;
        font-weight: bold;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.3rem 0;
          color: #fff;
          background: ${colors.blueGrey400};
          border-bottom: 1px solid ${colors.blueGrey500};
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
            padding: 0.5rem 1.5rem;
            border-radius: 0.25rem;
            &:hover {
              background: ${colors.blueGrey300};
            }
          `}
          onClick={() => setDropdownActive(!dropdownActive)}
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
