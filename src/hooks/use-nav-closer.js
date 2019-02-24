import {useContext} from 'react'
import {NavContext} from '../components/nav-state'

const useNavCloser = () => {
  const {setDropdownActive} = useContext(NavContext)
  const handler = e => {
    if (e.eventPhase === window.Event.BUBBLING_PHASE) {
      setDropdownActive(false)
    }
  }

  return handler
}

export default useNavCloser
