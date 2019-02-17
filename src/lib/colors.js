import {blue, blueGrey, grey, brown} from '@material-ui/core/colors'
import Color from 'color'

export default {
  brown50: brown[50],
  blueGrey50: blueGrey[50],
  blueGrey100: blueGrey[100],
  blueGrey400: blueGrey[400],
  blueGrey700: blueGrey[700],
  blue50: blue[50],
  blue100: blue[100],
  blue400: blue[400],
  grey500: grey[500],
  grey900: grey[900],
  // eslint-disable-next-line  new-cap
  grey900alpha: Color(grey[900])
    .alpha(0.6)
    .hsl()
    .string()
}
