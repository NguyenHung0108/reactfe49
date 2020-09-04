import React, { Component } from 'react'
import SanPham from '../SanPham'

export default class SanPhamGH extends Component {
    render() {
        let {sp, themGioHang} = this.props;



        return (

            <div>
                <div className="card">
                    <img className="card-img-top" src={sp.hinhAnh} alt="dt1" />
                    <div className="card-body">
                        <h4 className="card-title">{sp.tenSP}</h4>
                        <p className="card-text">{sp.gia}</p>
                        <button className="btn btn-success" onClick = { () => {
                            this.props.themGioHang(sanPham)
                        }}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>

        )
    }
}
