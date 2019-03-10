import React from 'react'
import {ErrataTheme} from '../errata'
import Page from '../../src/components/page'

export default () => (
  <ErrataTheme>
    <Page type="errata" embedMultiple="errata-20,errata-42" />
  </ErrataTheme>
)
