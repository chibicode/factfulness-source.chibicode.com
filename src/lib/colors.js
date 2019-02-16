import {blue, blueGrey, grey, orange} from '@material-ui/core/colors'
import Color from 'color'

export default {
  orange50: orange[50],
  blueGrey50: blueGrey[50],
  blueGrey100: blueGrey[100],
  blueGrey400: blueGrey[400],
  blue50: blue[50],
  blue100: blue[100],
  blue400: blue[400],
  grey100: grey[100],
  grey200: grey[200],
  grey500: grey[500],
  grey700: grey[700],
  grey900: grey[900],
  // eslint-disable-next-line  new-cap
  grey900alpha: Color(grey[900])
    .alpha(0.6)
    .hsl()
    .string()
}
