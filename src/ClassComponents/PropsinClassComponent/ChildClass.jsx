import React, { Component } from 'react'

export default class ChildClass extends Component {
    render() {
        return (
            <>
                <h4>Name={this.props.Name}</h4>
                <h4>Roll No.={this.props.Rno}</h4>
            </>
        )
    }
}
