import { filterChange } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"
const Filter=()=>{
  const dispatch = useDispatch()
  const handleChange=(event)=>{
    console.log(event.target.value)
    const filteringAnecdote =event.target.value
    dispatch(filterChange(filteringAnecdote))
  }
  const style={
    marginBottom:10
  }
  return(
    <div style={style}>
      filter <input onChange={handleChange}/>
    </div>
  )
}
export default Filter