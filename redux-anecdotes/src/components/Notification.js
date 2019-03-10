import React from 'react';

const Notification = ({store}) => {
  const notification = store.getState().notification
  if (notification.length === 0 || notification.data.length === 0){
      return null
  }
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification.data}
    </div>
  )
}

export default Notification
