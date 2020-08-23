import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    productList = [
        { id: 1, name: 'Iphone X', price: 100000 },
        { id: 2, name: 'Samsung Note X Plus', price: 9000 },
        { id: 3, name: 'HTC once', price: 30000 },
        { id: 4, name: 'Vsmart 4', price: 200000 },

    ]
    renderProduct = () => {
        // let content = [];
        // for (let i = 0; i < this.productList.length; i++) {
        //     let product = this.productList[i];
        //     let cardProduct = <div>
        //         <div className="card text-left">
        //             <img src="holder.js/100x180/" alt />
        //             <div className="card-body">
        // <h4 classname="card-title">${product.name}</h4>
        //                 <p classname="card-text">${product.price}</p>
        //             </div>
        //         </div>
        //     </div>;
        //     content.push(cardProduct);


        // }
        // return content;



        //CÁCH 2: RENDER VỚI HÀM MAP
        let arrJSXProduct = this.productList.map((product, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src="https://picsum.photos/200/200" alt={product.name} />
                    <div className="card-body">
                        <h4 className="card-title">${product.name}</h4>
                        <p className="card-text">${product.price}</p>
                    </div>
                </div>
            </div>
        })
        return arrJSXProduct;
    }



    render() {
        return (
            <div className="container">
                <div className="row">  {this.renderProduct()}</div>

            </div>


        )
    }
}
