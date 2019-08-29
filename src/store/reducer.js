import {combineReducers} from 'redux'
// import initState from './state'

// function reducer (state = initState.user,action) {
//     debugger;
//     switch(action.type){
//         case 'CHANGE_NAME':
//             return {...state, name: action.name}
//         case 'CHANGE_JOB':
//             return {...state, job: action.job}
//         default:
//             return state
//     }
// }

// function textInfo (state=initState.text,action) {
//     switch(action.type) {
//         case 'CHANGE_TEXT':
//             return {...state, text: action.text}
//         default:
//             return state
//     }
// }

// export default reducer = combineReducers({
//     userInfo,
//     // textInfo
// })
import textreducer from './reducer/textReducer'
import userreducer from './reducer/userReducer'

const reducer = combineReducers({
    text: textreducer,
    user: userreducer
})

export default reducer;

