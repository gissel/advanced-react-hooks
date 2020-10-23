// useReducer: simple Counter
// 💯 traditional dispatch object with a type and switch statement
// http://localhost:3000/isolated/final/01.extra-4.js

import React from 'react'

function countReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return {count: state.count + action.step}
    }
    case 'decrement': {
      if (state.count > 0) {
        return {count: state.count - action.step}
      }
      return state
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state

  return (
    <div>
      <button onClick={() => dispatch({type: 'increment', step})}>+</button>
      <button onClick={() => dispatch({type: 'decrement', step})}>-</button>
      <div>{count}</div>
    </div>
  )
}

function App() {
  return <Counter />
}

export default App
