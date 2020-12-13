import statusReducer from './reducers/editStatus';
import gearReducer from './reducers/gearReducers'

var redux = require('redux');


const allReducers = redux.combineReducers({
  gear: gearReducer,
  editStatus: statusReducer
})

var store1 = redux.createStore(allReducers)

store1.subscribe(() => {
  console.log(store1.getState());
})
store1.dispatch({ type: 'CHANGE_STATUS' })

store1.dispatch({ type: 'ADD_NEW',
 newItems: 'HeadPhone' })

store1.dispatch({
  type: 'DELETE',
  index: 0
})

export default store1;

// var oldState = {
//   gear: ['screen', 'keyboard', 'mouse','asdasd'],
//   editStatus: true
// }
// var reducer1 = (state = oldState, action) => {
//   switch (action.type) {
//     case 'CHANGE_STATUS':
//       return { ...state, editStatus: !state.editStatus }
//     // break;
//     case 'ADD_NEW':
//       return { ...state, gear: [...state.gear, action.newItems] }
//     // break
//     case 'DELETE':
//       return { ...state, gear: state.gear.filter((value, key) => key !== action.index) }
//     default:
//       return state;
//   }

// }
// const gearInitialState = ['screen', 'keyboard', 'mouse']
// const gearReducer = (state = gearInitialState, action) => {
//   switch (action.type) {
//     case 'ADD_NEW':
//       return [...state, action.newItems]
//     case 'DELETE':
//       return [state.filter((value, key) => key !== action.index)]
//     default:
//       return state
//   }
// }

// const statusInitialState = false
// const statusReducer = (state = statusInitialState, action) => {
//   switch (action.type) {
//     case 'CHANGE_STATUS':
//       return !state
//     default:
//       return state
//   }
// }

