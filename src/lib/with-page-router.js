// https://github.com/zeit/next.js/issues/4804#issuecomment-460754433
import React from 'react'
import {withRouter} from 'next/router'
import queryString from 'query-string'

const withPageRouter = Component => {
  return withRouter(({router, ...props}) => {
    router.query = queryString.parse(router.asPath.split(/\?/)[1])

    return <Component {...props} router={router} />
  })
}

export default withPageRouter
