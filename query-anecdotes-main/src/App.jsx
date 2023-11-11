import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import {  getAnecdotes, voteAnecdote } from './requests'
const App = () => {
  const queryClient=useQueryClient()
    const voteAnecdoteMutation=useMutation({
      mutationFn:voteAnecdote,
      onSuccess:(vote)=>{
        console.log(JSON.parse(JSON.stringify(vote)))
        const anecdotes=queryClient.getQueryData(['anecdotes'])
        queryClient.setQueryData(['anecdotes'],anecdotes.map(an=>an.id===vote.id?vote:an))
      }
    })

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1,
    refetchOnWindowFocus: false
  })
  console.log(JSON.parse(JSON.stringify(result)))
  const handleVote = (anecdote) => {
    console.log('vote')
    voteAnecdoteMutation.mutate(anecdote)
  }
  if ( result.isLoading ) {
    return <div>loading data...</div>
  }
    if ( result.isError ) {
    return <div>anecdotes service not available due to problems in server.</div>
  }
  const anecdotes = result.data


  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
