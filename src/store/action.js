function changeName({name}) {
    return {
        type: 'CHANGE_NAME',
        name: name
    }
}

function changeJob({job}) {
    return {
        type: 'CHANGE_JOB',
        job: job,
    }
}

function changeText({text}) {
    return {
        type: 'CHANGE_TEXT',
        text: text
    }
}

export default {changeName, changeJob,changeText}