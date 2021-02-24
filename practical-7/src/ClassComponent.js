import React, { Component } from 'react';

const style = {
    backgroundColor: "pink",
    margin: "10px auto",
    width: "550px",
    height: "100px",
    borderRadius: "8px",
    textAlign: "center",
    padding: "20px",
    fontWeight: "300px",
    fontFamily: "Arial, Helvetica, sans-serif"
  }
  const span = {
      color: "red",
        fontSize: "18px"
  }
  const text = {
      backgroundColor: "yellow",
      fontWeight: "bold",
      padding: "3px",
      borderRadius: "3px",
      color: "blue"
  }

export default class ClassComponent extends Component {
  render() {
    return (
      <React.Fragment>
      <div style={style}>
      <h1>This is Class Component</h1>
      <p><span style={span}> created by:</span><span style={text}>Ashita Goyal </span> </p>
      </div>
      </React.Fragment>
    );
  }
}
