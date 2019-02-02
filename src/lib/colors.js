import {green, grey, pink} from '@material-ui/core/colors'
import Color from 'color'

export default {
  pink50: pink[50],
  green100: green[100],
  green200: green[200],
  green400: green[400],
  grey100: grey[100],
  grey200: grey[200],
  grey300: grey[300],
  grey500: grey[500],
  grey700: grey[700],
  grey900: grey[900],
  // eslint-disable-next-line  new-cap
  grey900alpha: Color(grey[900])
    .alpha(0.8)
    .hsl()
    .string()
}
