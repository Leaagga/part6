import { createContext, useReducer } from 'react'

const counterReducer = (state, action)=>{
  switch(action.type){
    case 'CREATE':
      return `Anecdote ${action.text} created`
    case 'VOTE':
      return `Anecodte ${action.text} voted`
    case 'CLEAR':
      return null
    case 'ERROR SHORT':
      return 'too short ancedote, must have length 5 or more'
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