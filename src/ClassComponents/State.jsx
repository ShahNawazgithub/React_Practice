import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super()
        this.state={name:"Shah"}
    }
    changeName(){
        this.setState({name:"Nawaz"})
    }
  render() {
    return (
      <>
      <h1>Name={this.state.name}</h1>
      <button onClick={()=>this.changeName()}>Update</button>
      </>
    )
  }
}
