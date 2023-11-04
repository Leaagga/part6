import AnecdoteForm from './components/AnecdoteForm'
import AnecodoteList from './components/AnecodoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
const App = () => {



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