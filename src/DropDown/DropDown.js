import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <select value={this.props.value} onChange={this.props.changeHandler}>
                <option>Select</option>
                {this.props.listOptions}
            </select>
        )
    }
}
