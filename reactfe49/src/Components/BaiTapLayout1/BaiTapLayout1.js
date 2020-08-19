//rcc - react class component
import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer';

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="row mx-0">
                
                <div className="col-4 menu m-auto">
                <h3 className="text-center">Menu</h3>
                </div>
                <div className="col-8 content">
                <h3 className="text-center">Content</h3>
                </div>
                
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
