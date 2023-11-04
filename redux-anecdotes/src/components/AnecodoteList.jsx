import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { resetNotification, setNotification } from '../reducers/notificationReducer'
const AnecodoteList=()=>{
  const anecdotes = useSelector(state =>{
    console.log(state)
    if (state.filter=='ALL'){
      return state.anecdote
    }
    return(
      state.anecdote.filter(anec=>{
        return anec.content.toLowerCase().includes(state.filter.toLowerCase())
      })
    )
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
    dispatch(setNotification(`You voted '${anecdotes.find(an=>an.id==id).content}'`))
    setTimeout(()=>dispatch(resetNotification()),5000)
  }
  return(
  <div>
    {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
  </div>)
}
export default AnecodoteList