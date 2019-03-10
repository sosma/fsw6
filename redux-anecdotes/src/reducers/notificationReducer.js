const notificationReducer = (state = '', action) => {
  console.log(action)
  switch (action.type) {
      case 'NOTIFY':
        return {data : action.data.content }
      default:
        return state
  }
}

export const notify = (content) => {
  return {
    type: 'NOTIFY',
    data: {
      content
    }
  }
}
export default notificationReducer
