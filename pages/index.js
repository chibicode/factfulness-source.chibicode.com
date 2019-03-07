import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import {blueGrey, brown, blue} from '@material-ui/core/colors'
import Page from '../src/components/page'
import theme from '../src/lib/theme'

export default () => (
  <ThemeProvider
    theme={theme({base: blueGrey, secondary: brown, accent: blue})}
  >
    <Page type="index" />
  </ThemeProvider>
)
