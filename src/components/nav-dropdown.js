/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useEffect} from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import groupedPagedSources from '../lib/grouped-paged-sources'
import Container from './container'
import {ns} from './global-styles'

const onClick = ({index, setDropdownActive}) => () => {
  window.scrollTo({
    top: window.document.querySelector(`#section-${index}`).offsetTop - 70,
    left: 0,
    behavior: 'auto'
  })
  setDropdownActive(false)
}

const NavDropdown = ({setDropdownActive, activeIndex}) => {
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])
  return (
    <Container hasHorizontalPadding={false}>
      <div
        css={({colors}) => css`
          flex-direction: row;
          flex-wrap: wrap;
          border-left: 1px solid ${colors.base500};
          margin-left: -1px;
          margin-right: -1px;
          display: flex;
          ${ns} {
            margin-left: -7px;
            margin-right: -7px;
          }
        `}
      >
        {groupedPagedSources.map((section, index) => (
          <button
            key={section[0].section}
            css={({colors}) => [
              css`
                cursor: pointer;
                outline: none;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.75rem 0;
                font-weight: bold;
                color: #fff;
                background: ${activeIndex === index
                  ? colors.base300
                  : colors.base400};
                border-top: none;
                border-left: none;
                border-right: 1px solid ${colors.base500};
                border-bottom: 1px solid ${colors.base500};
                &:hover {
                  background: ${colors.base300};
                }
              `,
              index > 1
                ? css`
                    flex: 0 0 33.33%;
                  `
                : css`
                    flex: 0 0 100%;
                    ${ns} {
                      flex: 0 0 49.99%;
                    }
                  `
            ]}
            type="button"
            onClick={onClick({index, setDropdownActive})}
          >
            {section[0].section}
          </button>
        ))}
      </div>
    </Container>
  )
}

export default NavDropdown
