import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { resetNotification, setNotification } from '../reducers/notificationReducer'
import anecodoteService from '../services/anecdote'
const AnecdoteForm=()=>{

  const dispatch = useDispatch()
  const createnew =async (event)=>{
    event.preventDefault()
    const content=event.target.anecdote.value
    event.target.anecdote.value=''
    const repsonse=await anecodoteService.createNew(content)
    dispatch(createAnecdote(repsonse))
    dispatch(setNotification(`You created '${content}'`))
    setTimeout(()=>dispatch(resetNotification()),5000)
  }

  return(
    <div>
      <h2>create new</h2>
      <form onSubmit={createnew}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}
export default AnecdoteForm