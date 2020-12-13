const statusInitialState = false
const statusReducer = (state = statusInitialState, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      return !state
    default:
      return state
  }
}
export default statusReducer;