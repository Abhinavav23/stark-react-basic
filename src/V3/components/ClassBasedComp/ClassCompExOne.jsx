import { Component } from "react";

export class ClassCompExOne extends Component{
    constructor(props){
        // calling Component class constructor
        super(props);
        // creating and initialize a state in class comp
        this.state = {
            classTime: '2hrs',
            classDays: ['Mon', 'Tues', 'Wed']
        }
    }

    

    updateTime = () => {
        console.log('updating time'); //sync
        console.log('before', this.state); //sync

        // first update the state with passes value
        // call the function you passes as second argument
        this.setState({...this.state, classTime: '4hrs'}, () => {
            console.log('from callback', this.state);
        }); //async

        console.log('after', this.state); //sync
    }
    
    render(){
        return (
            <main>
                <h3>Class Comp</h3>
                <div>user: {this.props.username}</div>
                <div>batch: {this.props.batch}</div>
                <div>Time: {this.state.classTime}</div>
                <div>Days: {this.state.classDays.join(" ")}</div>
                <button onClick={this.updateTime}>updateTime</button>
            </main>
        )
    }
}


// funcCall(val1, val2)
// new ClassCompExOne(val1,val2)