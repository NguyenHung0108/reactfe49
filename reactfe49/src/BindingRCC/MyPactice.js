import React, { Component } from 'react'

export default class MyPactice extends Component {
    state = {
        hinhAnh: "./img/CarBasic/products/black-car.jpg"
    }
    doiMauXe = (color) => {
        this.setState({
            hinhAnh:`./img/CarBasic/products/${color}.jpg`
        })
    }





    render() {

        return (
            <div className="container">
               
                <div className="row">
                    <div className="col-7 mt-5">
                        <img style={{width:"100%"}} src={this.state.hinhAnh} />
                    </div>
                    <div className="col-5">

                        
                            <form className="form">
                                
                                <h2>Choice Car Color</h2>
                                <div className="inputGroup" style={{cursor:"pointer"}} onClick={()=>{
                                    this.doiMauXe("black-car")
                                }}>
                                    <input id="radio1" name="radio" type="radio" />
                                    <label htmlFor="radio1">Black</label>
                                </div>
                                <div className="inputGroup" style={{cursor:"pointer"}} onClick={()=>{
                                    this.doiMauXe("red-car")
                                }}>
                                    <input id="radio2" name="radio" type="radio" />
                                    <label htmlFor="radio2">Red</label>
                                </div>
                                <div className="inputGroup" style={{cursor:"pointer"}} onClick={()=>{
                                    this.doiMauXe("silver-car")
                                }}>
                                    <input id="radio3" name="radio" type="radio" />
                                    <label htmlFor="radio3">Silver</label>
                                </div>
                                <div className="inputGroup" style={{cursor:"pointer"}} onClick={()=>{
                                    this.doiMauXe("steel-car")
                                }}>
                                    <input id="radio4" name="radio" type="radio" />
                                    <label htmlFor="radio4">Steel</label>
                                </div>
                            </form>
                          
                        
                    </div>
                </div>
            </div>
        )
    }
}