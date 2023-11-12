import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../requests"
import { useContext } from "react"
import CounterContext from "../CounterContext"
import { useQuery } from '@tanstack/react-query'
const AnecdoteForm = () => {
  const [counter,dispatch]=useContext(CounterContext)
  const queryClient=useQueryClient()
  const newAnecdoteMutation = useMutation(
    { mutationFn: createAnecdote,
      onSuccess: (newAnecdote)=>{
        dispatch({type:'CREATE',text:newAnecdote.content})
        queryClient.invalidateQueries({ queryKey: ['anecdotes'] })},
        onError:()=>{dispatch({type:'ERROR SHORT'})}
      })
    
  const getId = () => (100000 * Math.random()).toFixed(0)
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    console.log(content)
      newAnecdoteMutation.mutate({
        content,
        id:getId(),
        votes:0
      })
    }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
