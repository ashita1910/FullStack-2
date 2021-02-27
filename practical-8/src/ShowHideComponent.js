import React, { Component } from 'react';
import "./ShowHideComponentCSS.css";
import Content from "./Content.js";

export default class ShowHideComponent extends Component {

    constructor() {
        super();
        this.state = {
            status: null
        }
        console.log("Constructor called");
    }

    componentDidMount() {
        document.getElementById("b2").style.display = "none";
        document.getElementById("b1").style.display = "block";
        console.log("componentDidMount() called");
    }

    componentDidUpdate(){
        if(this.state.status === "active"){
            document.getElementById("b2").style.display = "block";
            document.getElementById("b1").style.display = "none";
        }
        else if(this.state.status === "inactive"){
            document.getElementById("b1").style.display = "block";
            document.getElementById("b2").style.display = "none";
        }
        console.log("componentDidUpdate() called");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount() called");
    }

    render() {
        return ( <>
            <h1 id = "showHideh1" > Ques - 2 </h1> 
            <hr / >
            <p className = "showHidep" > Welcome Here! </p> 
            <p className = "showHidep" > Click on button to see MORE | LESS </p> 
            {this.state.status === "active" ? <Content/> : null}
            <div id = "showHideDiv" >
            <button id = "b1" onClick = { () => {this.setState({status: "active"})}}> SHOW MORE </button> 
            <button id = "b2" onClick = { () => {this.setState({status: "inactive"})}}> SHOW LESS </button> 
            </div > 
            </>
        );
    }
}