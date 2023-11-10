import { createSlice } from "@reduxjs/toolkit"
import anecodoteService from '../services/anecdote'
// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice =createSlice({
  name:'anecdote',
  initialState:[],
  reducers:{
    voteAnecdote(state,action){
      const id = action.payload
      const votedAnecdote = state.find(s=>s.id===id)
      const changedAnecdote ={
          ...votedAnecdote,
          votes:votedAnecdote.votes+1
        }
      return state.map(s=>s.id==changedAnecdote.id?changedAnecdote:s).sort((a,b)=>b.votes-a.votes)}
    ,
    appendAnecdote(state,action){
        const newContent=action.payload
        state.push(newContent)     
    },
    setAnecdote(state,action){
      console.log(state)
      console.log(action)
      return action.payload.sort((a,b)=>b.votes-a.votes)
    }
  }})

export const { appendAnecdote, voteAnecdote, setAnecdote }=anecdoteSlice.actions
export const initialAnecdote=()=>{
  return async dispatch=>{
    const Anecdote=await anecodoteService.getAll()
    dispatch(setAnecdote(Anecdote))
  }
}
export const createAnecdote=content=>{
  return async dispatch=>{
      const newAnecdote = {
          content:content,
          id:getId(),
          votes:0
        }
      const createdAnecdote=await anecodoteService.createNew(newAnecdote)
      dispatch(appendAnecdote(createdAnecdote))
  }
}
export default anecdoteSlice.reducer