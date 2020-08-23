import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        imgCar: './img/CarBasic/products/black-car.jpg'
    }
    handleChangeColorCar = (imgColor) => {
        this.setState ({
            imgCar:`./img/CarBasic/products/${imgColor}-car.jpg`
        })
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className='col-8'>
                        <img style={{ width: '100%' }} src={this.state.imgCar} />

                    </div>
                    <div className='col-3'>
                        <div className="card text-left">
                            <div className="card-header">
                                EXTERIOR COLOR
                            </div>
                            <div className="card-body">
                                <div onClick={() => {
                                   this.handleChangeColorCar('black')
                                }} className='row p-1 mt-2' style={{ border: '4px solid #eee', cursor: 'pointer' }}>
                                    <div className="image col-4">
                                        <img style={{ width: '100%' }} src='./img/CarBasic/icons/icon-black.jpg' />
                                    </div>
                                    <div className="col-8">
                                        <h5>Color Black</h5>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div onClick={() => {
                                    this.handleChangeColorCar('red')
                                }} className='row p-1 mt-2' style={{ border: '4px solid #eee', cursor: 'pointer' }}>
                                    <div className="image col-4">
                                        <img style={{ width: '100%' }} src='./img/CarBasic/icons/icon-red.jpg' />
                                    </div>
                                    <div className="col-8">
                                        <h5>Color Red</h5>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div onClick={() => {
                                    this.handleChangeColorCar('silver')
                                }} className='row p-1 mt-2' style={{ border: '4px solid #eee', cursor: 'pointer' }}>
                                    <div className="image col-4">
                                        <img style={{ width: '100%' }} src='./img/CarBasic/icons/icon-silver.jpg' />
                                    </div>
                                    <div className="col-8">
                                        <h5>Color Silver</h5>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div onClick={() => {
                                    // this.setState({
                                    //     imgCar: './img/CarBasic/products/steel-car.jpg'
                                    // })
                                    this.handleChangeColorCar('steel')
                                }} className='row p-1 mt-2' style={{ border: '4px solid #eee', cursor: 'pointer' }}>
                                    <div className="image col-4">
                                        <img style={{ width: '100%' }} src='./img/CarBasic/icons/icon-steel.jpg' />
                                    </div>
                                    <div className="col-8">
                                        <h5>Color Steel</h5>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                            </div>
                        </div>





                        {/* <div className="card" style={{ width: '18rem' }}>
                            <div className="card-header">
                                EXTERIOR COLOR
                             </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <a href=""><img style={{ width: '20%' }} src='./img/CarBasic/icons/icon-black.jpg' /></a> Crystal Black</li>
                                <li className="list-group-item"> <a href=""><img style={{ width: '20%' }} src='./img/CarBasic/icons/icon-red.jpg' /></a>Royal Red</li>
                                <li className="list-group-item"> <a href=""><img style={{ width: '20%' }} src='./img/CarBasic/icons/icon-silver.jpg' /></a>Lunar Silver</li>
                                <li className="list-group-item"> <a href=""><img style={{ width: '20%' }} src='./img/CarBasic/icons/icon-steel.jpg' /></a>Modern Steel</li>

                            </ul>
                        </div> */}

                    </div>


                </div>
            </div>
        )
    }
}
