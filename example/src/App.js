import React from 'react'
import { useMyHook } from '@jgordy24/react-hooks-lib'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App