import React from 'react'
import useNavCloser from '../hooks/use-nav-closer'

const NavCloser = ({children}) => {
  const handler = useNavCloser()
  return <div onClick={handler}>{children}</div>
}

export default NavCloser
