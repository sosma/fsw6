import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'


const NewAnecdote = (props) => {
  const store = props.store
  const create = (value) => {
      store.dispatch(createAnecdote(value))
      store.dispatch(notify('add'))
      setTimeout(() =>
      store.dispatch(notify('')), 5000)
  }
  const addAnecdote = (event) => {
    event.preventDefault()
    create(event.target.anecdote.value)
    event.target.anecdote.value = ''
  }
  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">lisää</button>
    </form>
  )
}

export default NewAnecdote
