import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../requests"

const AnecdoteForm = () => {
  const queryClient=useQueryClient()
  const newAnecdoteMutation = useMutation(
    { mutationFn: createAnecdote,
      onSuccess: ()=>{
        queryClient.invalidateQueries({ queryKey: ['anecdotes'] })}
      })
    
  const getId = () => (100000 * Math.random()).toFixed(0)
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    console.log(content)
    if (content.length >=5){
      newAnecdoteMutation.mutate({
        content,
        id:getId(),
        votes:0
      })
    }else{
      console.log('anecdote\'s length shorter than 5')
    }}
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
