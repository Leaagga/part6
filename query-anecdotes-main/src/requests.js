import axios from 'axios'
const baseUrl='http://localhost:3001/anecdotes'
axios.interceptors.request.use(function(config){
  if (config.data&&config.data.content<5){throw 'error'}
  return config
},function(error){
   return Promise.reject(error)
})
export const getAnecdotes = () =>
  axios.get(baseUrl).then(res => res.data)

export const createAnecdote = newAnecdote =>
  axios.post(baseUrl, newAnecdote).then(res =>{return(res.data)})
export const voteAnecdote = votedAnecdote=>
  axios.put(`${baseUrl}/${votedAnecdote.id}`,{...votedAnecdote,votes:votedAnecdote.votes+1}).then(res=>res.data)

  