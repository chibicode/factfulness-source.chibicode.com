/* eslint camelcase: 0 */
// https://github.com/zeit/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js
export const GA_TRACKING_ID = 'UA-32987822-22'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url
  })
}
