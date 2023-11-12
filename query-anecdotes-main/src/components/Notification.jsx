import { useContext } from "react"
import CounterContext from "../CounterContext"

const Notification = () => {
  const [counter,dispatch]=useContext(CounterContext)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (counter){
    setTimeout(()=>dispatch({type:'CLEAR'}),5000)
  }
  if (counter===null)return null
  return (
    <div style={style}>
      {counter}
    </div>
  )
}

export default Notification
