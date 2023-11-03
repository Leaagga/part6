import AnecdoteForm from './components/AnecdoteForm'
import AnecodoteList from './components/AnecodoteList'
import Filter from './components/Filter'
const App = () => {



  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecodoteList />
      <AnecdoteForm />

    </div>
  )
}

export default App