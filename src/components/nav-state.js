import React, {useState, createContext} from 'react'

export const NavContext = createContext({})

const NavState = ({children}) => {
  const [visibility, setVisibility] = useState({})
  const visibleIndices = Object.keys(visibility)
    .map(x => parseInt(x, 10))
    .filter(x => visibility[x])
  const minVisibleIndex =
    visibleIndices.length > 0 ? Math.min.apply(null, visibleIndices) : -1
  return (
    <NavContext.Provider value={{minVisibleIndex, visibility, setVisibility}}>
      {children}
    </NavContext.Provider>
  )
}

export default NavState
