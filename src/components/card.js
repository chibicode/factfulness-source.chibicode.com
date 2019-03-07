/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {ns} from './global-styles'
import ModalHeader from './modal-header'

const Card = ({children, isLast, background, foreground, isModal}) => (
  <>
    <section
      css={({colors}) => css`
        background: ${background ? background(colors) : '#fff'};
        color: ${foreground || 'inherit'};
        border: 1px solid ${colors.base100};
        border-radius: 0.5rem;
        overflow: hidden;
        word-wrap: break-word;
      `}
    >
      {isModal && (
        <div
          css={({colors}) => css`
            padding: 0.75rem 0.875rem 1px;
            background: ${colors.base50};

            ${ns} {
              padding: 1.5rem 2rem 1px;
            }
          `}
        >
          <ModalHeader />
        </div>
      )}
      <div
        css={css`
          padding: ${isModal ? '1rem' : '1.25rem'} 0.875rem 0.25rem;

          ${ns} {
            padding: ${isModal ? '1.25rem' : '2rem'} 2rem 1rem;
          }
        `}
      >
        {children}
      </div>
    </section>
    {!isLast && (
      <div
        css={({colors}) => css`
          width: 1.25rem;
          height: 1rem;
          ${ns} {
            height: 1.75rem;
          }
          margin: 0 auto;
          background: ${colors.base100};
        `}
      />
    )}
  </>
)

Card.defaultProps = {
  isLast: false
}

export default Card
