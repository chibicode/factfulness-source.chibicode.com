/** @jsx jsx */
import {jsx, css, Global} from '@emotion/core'
import 'modern-normalize'

const NOT_SMALL = '48em'
export const ns = `@media screen and (min-width: ${NOT_SMALL})`

const GlobalStyles = () => (
  <Global
    styles={({colors}) => css`
      html,
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
          'Segoe UI', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo,
          sans-serif;
      }

      body {
        padding-top: 2rem;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      strong {
        font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
          'Segoe UI', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo,
          sans-serif;
        font-weight: bold;
      }

      html {
        font-size: 16px;
        color: ${colors.grey900};
        line-height: 1.8;
        background-color: ${colors.base50};
      }

      button {
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
      }

      svg {
        height: 100%;
        width: auto;
      }

      img {
        display: block;
        max-width: 100%;
      }

      ${ns} {
        html {
          font-size: 18px;
        }
      }

      p {
        margin: 0 0 1rem;
      }

      a {
        color: inherit;
        &:hover {
          background-color: ${colors.accent100};
        }
      }

      code {
        background-color: ${colors.secondary50};
      }

      ul,
      ol {
        padding-left: 1.5rem;
      }

      /* Nested lists in markdown  */
      li > p + ul {
        margin-top: -1rem;
      }

      hr {
        width: 25%;
        margin: 2em auto;
        border-top: 0;
        border-bottom: 1px solid ${colors.base200};
        border-left: 0;
        border-right: 0;
      }
    `}
  />
)

export default GlobalStyles
