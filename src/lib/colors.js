import {green, grey} from '@material-ui/core/colors'
import Color from 'color'

export default {
  green100: green[100],
  green200: green[200],
  green400: green[400],
  grey200: grey[200],
  grey500: grey[500],
  grey900: grey[900],
  // eslint-disable-next-line  new-cap
  grey900alpha: Color(grey[900])
    .alpha(0.8)
    .hsl()
    .string()
}
