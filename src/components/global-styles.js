/** @jsx jsx */
import {jsx, css, Global} from '@emotion/core'
import 'modern-normalize'
import colors from '../lib/colors'

const NOT_SMALL = '48em'
export const ns = `@media screen and (min-width: ${NOT_SMALL})`

const GlobalStyles = () => (
  <Global
    styles={[
      css`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
            'Segoe UI', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo,
            sans-serif;
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
          color: #333;
          line-height: 1.8;
          background-color: ${colors.green100};
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
            background-color: #bbdefb;
          }
        }
      `
    ]}
  />
)

export default GlobalStyles
