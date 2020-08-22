import React, { Component } from 'react'
import BT3Header from './BT3Header'
import BT3Carousel from './BT3Carousel'
import BT3Footer from './BT3Footer'
import BT3ProductItem from './BT3ProductItem'
import BT3SideBar from './BT3SideBar'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BT3Header></BT3Header>
                <div className='row container-fluid'>
                    <div className="col-2 mt-5">
                        <BT3SideBar></BT3SideBar>
                    </div>
                    <div className="col-9" >
                        <BT3Carousel> </BT3Carousel>
                        <BT3ProductItem></BT3ProductItem>

                    </div>

                </div>

                <BT3Footer></BT3Footer>
            </div>
        )
    }
}
