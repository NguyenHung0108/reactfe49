import React, { Component } from 'react'

export default class DataBinding extends Component {
    //Thuộc tính - không có let var const -Xài ở đâu cũng dc chỉ cần xài this.
    product = {
        id: 1,
        name: 'Iphone X',
        price: 100000,

    }


    //Phương Thức - không có let var const Xài ở đâu cũng dc chỉ cần xài this.
    renderCard = () => {
        return (<div className="card text-left">

            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">{this.product.name}</p>
            </div>
        </div>)

    };
    render() {

        //Binding Data
        let title = "Hello FrontEnd 49";
        let photo = 'http://picsum.photos/200/200';
        //Binding function
        let renderImg = () => {
            return <img src="http://picsum.photos/200/200" />
        }
        return (
            <div>
                <h1 id="title">{title}</h1>
                <img src={photo} />
                <img src="./img/logo.jpg" />
                <div>
                    {renderImg()}
                </div>
                <div>
                    {this.renderCard()}
                </div>
            </div>
        )
    }
}
