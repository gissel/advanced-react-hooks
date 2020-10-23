// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

//we support the function API and the object API
const countReducer = (state, action) => ({
  ...state,
  ...(typeof action === 'function' ? action(state) : action),
})

function Counter({initialCount = 0, step = 1}) {
  //const [state, dispatch] = useReducer(reducer, initialArg, init);
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state

  // Object API
  // const increment = () => setState({count: count + step})

  //Function API
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
