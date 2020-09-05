import React, { Component } from 'react'

export default class MatKinh extends Component {

    render() {
    let {thayKinh} = this.props
        return (
                <div className = "row m-auto mt-5 bg-light" style = {{width:"70%"}}>
                    {thayKinh}
                </div>
                
           
        )
    }
}
