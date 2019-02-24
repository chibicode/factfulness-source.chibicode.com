import React, {useState, createContext} from 'react'

export const NavContext = createContext({})

const NavState = ({children}) => {
  const [visibility, setVisibility] = useState({})
  const [dropdownActive, setDropdownActive] = useState(false)
  const visibleIndices = Object.keys(visibility)
    .map(x => parseInt(x, 10))
    .filter(x => visibility[x])
  const maxVisibleIndex =
    visibleIndices.length > 0 ? Math.max.apply(null, visibleIndices) : -1
  return (
    <NavContext.Provider
      value={{
        visibility,
        maxVisibleIndex,
        setVisibility,
        dropdownActive,
        setDropdownActive
      }}
    >
      {children}
    </NavContext.Provider>
  )
}

export default NavState
