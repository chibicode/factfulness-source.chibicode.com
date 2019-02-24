import styled from '@emotion/styled'
import colors from '../lib/colors'

export default styled.button`
  padding: 0;
  background: transparent;
  color: inherit;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: ${({bordered}) =>
    bordered ? `1px solid ${colors.blueGrey400}` : `none`};
  text-decoration: ${({bordered}) => (bordered ? `none` : `underline`)};
  cursor: pointer;
  &:hover {
    background-color: ${colors.blue100};
    border-bottom: ${({bordered}) =>
      bordered ? `1px solid ${colors.grey900}` : `none`};
  }
`
