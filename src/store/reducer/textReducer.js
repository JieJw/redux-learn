let initState = {
    text: 'Hello,world',
    count: 0,
}

function textreducer (state=initState.text,action) {
    switch(action.type) {
        case 'CHANGE_TEXT':
            return {...state, text: action.text}
        case 'INCREASE_COUNT':
            return {...state, count: state.count+1}
        default:
            return state
    }
}

export default textreducer;