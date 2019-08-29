let initState = {
    user: {
        name: 'wjj',
        age: 23,
        job: 'front-end',
    }
}

function userreducer (state = initState.user,action) {
    switch(action.type){
        case 'CHANGE_NAME':
            return {...state, name: action.name}
        case 'CHANGE_JOB':
            return {...state, job: action.job}
        case 'CHNAGE_AGE':
            return {...state, age: state.age +1}
        default:
            return state
    }
}

export default userreducer;