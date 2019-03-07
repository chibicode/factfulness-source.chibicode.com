import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import {brown, blueGrey, red} from '@material-ui/core/colors'
import Page from '../src/components/page'
import theme from '../src/lib/theme'

export default () => (
  <ThemeProvider theme={theme({base: brown, secondary: blueGrey, accent: red})}>
    <Page type="errata" />
  </ThemeProvider>
)
