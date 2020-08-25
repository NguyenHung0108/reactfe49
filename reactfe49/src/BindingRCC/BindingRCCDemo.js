import React, { Component } from 'react'

export default class BindingRCCDemo extends Component {
renderImg = () => {
    return <img src = "http://picsum.photos/400/300" />
}
renderName = () => {
    return 'Nguyễn Hưng 123'
}
renderMulti = () => {
    let people = {
        id: '123',
        name: "Oanh Oanh",
        price: 5000000,
    }
    return <div>
        <p>{people.id}</p>
        <p>{people.name}</p>
        <p>{people.price}</p>
    </div>
}


    render() {
        return (
            <div className = "container">
                {this.renderImg()}
                {this.renderName()}
                {this.renderMulti}
                
            </div>
        )
    }
}
