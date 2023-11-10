import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
const AnecdoteForm=()=>{

  const dispatch = useDispatch()
  const createnew =async (event)=>{
    event.preventDefault()
    const content=event.target.anecdote.value
    event.target.anecdote.value=''
    dispatch(createAnecdote(content))
    dispatch(setNotification(`You created '${content}'`,5000))
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