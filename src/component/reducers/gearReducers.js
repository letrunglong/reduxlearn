const gearInitialState = ['screen', 'keyboard', 'mouse']
const gearReducer = (state = gearInitialState, action) => {
  switch (action.type) {
    case 'ADD_NEW':
      return [...state, action.newItems]
    case 'DELETE':
      return [state.filter((value, key) => key !== action.index)]
    default:
      return state
  }
}
export default gearReducer;