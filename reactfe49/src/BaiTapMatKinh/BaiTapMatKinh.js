import React, { Component } from 'react'
import MatKinh from './MatKinh'
import NguoiMau from './NguoiMau'

export default class BaiTapMatKinh extends Component {

    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ]
    state = {
        chiTietKinh: this.arrProduct[0]
    }
    renderImg = () => {
        return this.arrProduct.map((kinh, index) => {
            return (
                <div className="col-2 anhKinh pt-4" key={index} onClick={() => this.renderChiTiet(kinh)}>
                    <img style={{ width: '100%' }} src={kinh.url} alt={kinh.name} />
                </div>
            )
        })
    }
    renderChiTiet = (kinh) => {
        this.setState({
            chiTietKinh: kinh
        })
    }
    render() {
        return (
            <div className="container-fluid px-0" style={{ backgroundImage: "url(./img/background.jpg)", backgroundSize: "cover" }}>
                <h3 className="text-center title py-3 text-white title">TRY GLASSES APP ONLINE</h3>
                <NguoiMau chiTietKinh={this.state.chiTietKinh} />
                <MatKinh thayKinh={this.renderImg()} />
            </div>

        )
    }

}