import React, { Component } from 'react';
import "./CounterComponentCSS.css";

class CounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.counter,
        };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
    }

    increase() {
        this.setState({
            counter: this.state.counter += 1,
        })
    }

    decrease() {
        this.setState({
            counter: this.state.counter -= 1,
        })
    }

    reset() {
        this.setState({
            counter: 0,
        })
    }

    render() {
        return ( 
        <>
            <h1> Ques - 1 </h1> 
            <hr/>
            <p id="counterp"> { this.state.counter } </p> 
            <div id="counterDiv">
            <button onClick = { this.increase } > INCREASE </button> 
            <button onClick = { this.reset } > RESET </button> 
            <button onClick = { this.decrease } > DECREASE </button> 
            </div> 
            </>
        );
    }
}

export default CounterComponent;