// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

// "count" - the current value of count
// "step" - the value passed to setCount
const countReducer = (count, step) => count + step

function Counter({initialCount = 0, step = 1}) {
  //const [state, dispatch] = useReducer(reducer, initialArg, init);
  const [count, changeCount] = React.useReducer(countReducer, initialCount)
  const increment = () => changeCount(step)

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
