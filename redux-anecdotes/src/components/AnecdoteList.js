import React from 'react'
import Anecdote from './Anecdote'
import { vote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const Anecdotes = ({store}) => {
  const vote2 = (id) => {
      store.dispatch(vote(id))
      store.dispatch(notify('vote'))
      setTimeout(() =>
      store.dispatch(notify('')), 5000)
  }
  var anecdotes = store.getState().anecdotes
  anecdotes.sort(function(a,b){
      return a.votes < b.votes
  })
  const anecdotes2 = store.getState().anecdotes.filter(anecdote => anecdote.content.includes(store.getState().filter))
  console.log(anecdotes2)
  return(
    <ul>
      {anecdotes2.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => vote2(anecdote.id)}
        />
      )}
    </ul>
  )
}

export default Anecdotes
