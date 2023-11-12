import { createContext, useReducer } from 'react'

const counterReducer = (state, action)=>{
  switch(action.type){
    case 'CREATE':
      return `Anecdote ${action.text} created`
    case 'VOTE':
      return `Anecodte ${action.text} voted`
    case 'CLEAR':
      return null
      default:
        return null
  }
}
const CounterContext = createContext()

export const CounterContextProvider = (props) => {
  const [counter, counterDispatch] = useReducer(counterReducer,null)

  return (
    <CounterContext.Provider value={[counter, counterDispatch] }>
      {props.children}
    </CounterContext.Provider>
  )
}

export default CounterContext