import React, { Component } from 'react'
import Child from './Child'
import RenderWithState from '../RenderWithState/RenderWithState'

export default class Styling extends Component {
    render() {
        return (
            <div>

                <Child></Child>
                <RenderWithState></RenderWithState>
            </div>
        )
    }
}
