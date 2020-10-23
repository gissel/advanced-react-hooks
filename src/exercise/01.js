// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

// "state" - the current value of count
// "newState" - the value passed to setCount
const countReducer = (state, newState) => newState

function Counter({initialCount = 0, step = 1}) {
  //const [state, dispatch] = useReducer(reducer, initialArg, init);
  const [count, setCount] = React.useReducer(countReducer, initialCount)

  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

// Counter original with useState
// import React from 'react'

// function Counter({initialCount = 0, step = 1}) {
//   const [count, setCount] = React.useState(initialCount)

//   const increment = () => setCount(count + step)
//   return <button onClick={increment}>{count}</button>
// }

// function App() {
//   return <Counter />
// }

// export default App
