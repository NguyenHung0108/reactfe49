import React, { Component } from 'react'

export default class GioHang extends Component {


    renderGioHang = () => {
        return this.props.GioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} style={{ width: 50, height: 50 }} /></td>
                <td>{spGH.gia}</td>
                <td>
                    <button onClick = {()=> {
                        this.props.tangGiamSL(spGH.maSP, false)
                    }}>-</button>
                    {spGH.soLuong}
                    <button onClick = {()=> {
                        this.props.tangGiamSL(spGH.maSP, true)
                    }}>+</button>
                </td>
                <td>{(spGH.gia * spGH.soLuong).toLocaleString()}</td>
            </tr>
        })
    }
    render() {
        return (
            <div>

                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Đơn giá</th>
                                            <th>Thành tiền</th>

                                        </tr>


                                    </thead>
                                    <tbody> {this.renderGioHang()}</tbody>
                                    <tfoot>

                                        <tr>
                                            <td colSpan="5"></td>
                                            <td> Thành Tiền</td>
                                            <td>
                                        {
                                            this.props.GioHang.reduce((tongTien, spGH, index) => {
                                                return tongTien += spGH.gia * spGH.soLuong
                                            }).toLocaleString()
                                        }

                                            </td>
                                        </tr>
                                    </tfoot>
                                  


                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
