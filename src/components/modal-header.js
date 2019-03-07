/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useContext} from 'react'
import {titleArray, description} from '../lib/meta'
import InternalLink from './internal-link'
import {PageContext} from './page'

const ModalHeader = () => {
  const {type} = useContext(PageContext)
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <h1
        css={({colors}) => css`
          margin-top: 0;
          font-size: 1rem;
          margin-right: 2rem;
          margin-bottom: 0rem;
          color: ${colors.base500};
          flex: 1;
        `}
      >
        {titleArray[type].join('')}
      </h1>
      <p
        css={({colors}) => css`
          color: ${colors.base400};
          font-size: 0.85rem;
        `}
      >
        {description[type]}
      </p>
      <InternalLink
        prefetch
        href={type === 'errata' ? '/errata' : '/'}
        css={({colors}) => css`
          position: absolute;
          right: -0.5rem;
          top: -0.5rem;
          width: 2rem;
          height: 2rem;
          color: ${colors.base400};
          font-size: 1.5rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 0.25rem;

          &:hover {
            background: #fff;
          }
        `}
      >
        {' '}
        &times;
      </InternalLink>
    </div>
  )
}

export default ModalHeader
