import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import {brown} from '@material-ui/core/colors'
import Page from '../src/components/page'
import theme from '../src/lib/theme'

export default () => (
  <ThemeProvider theme={theme(brown)}>
    <Page type="errata" />
  </ThemeProvider>
)
