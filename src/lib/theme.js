import {blue, grey, brown, green} from '@material-ui/core/colors'
import Color from 'color'

export default base => ({
  colors: {
    brown50: brown[50],
    base50: base[50],
    base100: base[100],
    base200: base[200],
    base300: base[300],
    base400: base[400],
    base500: base[500],
    green50: green[50],
    blue50: blue[50],
    blue100: blue[100],
    grey900: grey[900],
    // eslint-disable-next-line  new-cap
    base900alpha: Color(base[900])
      .alpha(0.6)
      .hsl()
      .string()
  }
})
