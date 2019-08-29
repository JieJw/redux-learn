import React from 'react'

import store from '../store'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: store.getState().user,
            text: store.getState().text,
        };
        this.changeName = this.changeName.bind(this);
        this.changeAge = this.changeAge.bind(this)
    }

    changeName() {
        store.dispatch({
            type: 'CHANGE_NAME',
            name: 'test'
        })
        this.setState({
            user: store.getState().user
        })
    }

    changeAge() {
        store.dispatch({
            type:'CHNAGE_AGE',
        })
        this.setState({
            user: store.getState().user
        })
    }

    render() {
        // console.log(store.getState())
        // debugger;
        const {} = this.props;
        const {user,text} = this.state;
        return (
            <div>
                <div>姓名：<span>{user.name}</span></div>
                <div>年龄：<span>{user.age}</span></div>
                <div>工作：<span>{user.job}</span></div>
                <div>logo:  {text}</div>
                <button onClick={this.changeName}>changeName</button>
                <button onClick={this.changeAge}>changeAge</button>
            </div>
        )
    }
}


export default Home;