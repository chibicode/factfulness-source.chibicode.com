import styled from '@emotion/styled'

export default styled.button`
  padding: 0;
  background: transparent;
  color: inherit;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: ${({bordered, theme}) =>
    bordered ? `1px solid ${theme.colors.base400}` : `none`};
  text-decoration: ${({bordered}) => (bordered ? `none` : `underline`)};
  cursor: pointer;
  &:hover {
    background-color: ${({theme}) => theme.colors.accent100};
    border-bottom: ${({bordered, theme}) =>
      bordered ? `1px solid ${theme.colors.grey900}` : `none`};
  }
`
