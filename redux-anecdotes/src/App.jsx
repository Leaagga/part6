
import AnecdoteForm from './components/AnecdoteForm'
import AnecodoteList from './components/AnecodoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { setAnecdote } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import anecodoteService from './services/anecdote'
import { useEffect } from 'react'

const App = () => {
    const dispatch = useDispatch()


      console.log('2')
    useEffect(()=>{
      anecodoteService.getAll().then(response=>dispatch(setAnecdote(response)))
    },[dispatch])
    

    console.log('1')

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecodoteList />
      <AnecdoteForm />

    </div>
  )
}

export default App