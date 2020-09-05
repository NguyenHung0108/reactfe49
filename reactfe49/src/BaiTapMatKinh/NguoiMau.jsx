import React, { Component } from 'react'

export default class NguoiMau extends Component {
    render() {
        let { chiTietKinh } = this.props
        return (
            <div className="row m-auto py-4" style={{ width: "80%" }}>
                <div className="col-3 mx-auto  matKinh">
                    <img style={{ width: "100%" }} src="./img/model.jpg" alt="" />
                    <div className="kinh_item">
                        <img style={{ width: "100%" }} src={chiTietKinh.url} alt="" />

                    </div>
                    <div className="kinh_info">
                        <h4>{chiTietKinh.name}</h4>
                        <p>{chiTietKinh.desc}</p>
                    </div>
                </div>
                <div className="col-3 mx-auto">
                    <img style={{ width: "100%" }} src="./img/model.jpg" alt="" />
                </div>
            </div>
        )
    }
}
