import axios from 'axios'
const baseUrl='http://localhost:3001/anecdotes'
const getAll = async ()=>{
  const response=await axios.get(baseUrl)
  console.log(response)
  return response.data  
}
const createNew=async (newContent)=>{
  const response =await axios.post(baseUrl,newContent)
  console.log(response)
  return response.data

}
const setVote=async (votedAnecdote)=>{
  const voteUrl=baseUrl+`/${votedAnecdote.id}`
  const response= await axios.patch(voteUrl,{votes:votedAnecdote.votes})
  console.log(response)
  return response
}
export default { getAll, createNew, setVote }