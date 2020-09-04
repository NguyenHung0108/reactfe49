import React, { Component } from 'react'
import GioHang from './GioHang'
import DanhSachSanPham from './DanhSachSanPham'

export default class BaiTapGioHang extends Component {

    // state = {
    //     gioHang : [
    //         {maSP:1 , tenSP : "Meizu" , hinhAnh: "./img/dt1.jpg", gia: 10000, soLuong: 1}
    //     ]
    // }

     mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/dt1.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/dt2.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/dt3.jpg" }
    
      ]

     themGioHang = (spClick) => {
         let spGioHang = {
             maSP: spClick.maSP,
             tenSP: spClick.tenSP,
             hinhAnh: spClick.hinhAnh,
             gia: spClick.gia,
             soLuong: 1
         }
         let gioHangUpdate = this.state.gioHang;
        
         
         //Tìm sản phầm có trong giỏ hàng hay khong

         let index = gioHangUpdate.findIndex(spGH => spGH.maSP === spGioHang.maSP);
         if ( index !== -1) {
             //TÌm thấy tại vị trí index

             gioHangUpdate[index].soLuong += 1;
         } else {
             //Không tìm thấy trong giỏ hàng => push vào gioHang
             gioHangUpdate.push(spGioHang);
         }

         //setstate gioHang  = gioHang sau khi xử lý
         this.setState({
             gioHang: gioHangUpdate
         })
     }
     xoaGioHang = (naSP) => {
        //  let gioHangUpdate = this.state.gioHang;
        // //  tìm xem trong gioHang có sản phẩm có mã sp dc click không 
        // let index = gioHangUpdate.findIndex(spGH => spGH.maSP === maSP);
        // if (index != -1) {
        //     gioHangUpdate.splice(index,1);
        // }
        // this.setState ({
        //     gioHang: gioHangUpdate
        // })
        // hoặc dùng hàm filter 
        this.setState({
            gioHang:this.state.gioHang.filter(sp=> sp.maSP !== maSP)
        })
     }

     tinhSLGH = () => {
         return this.state.gioHang.reduce((soLuong, spGH, index) => {
             return soLuong += spGH.soLuong
         }, 0)
     }
     tangGiamSL = (maSP, tangGiam) => {
        //  tangGiam = true => tăng
        //  tangGiam = false => giảm
        let gioHangUpdate = this.state.gioHang;
        let index = gioHangUpdate.findIndex(spGH => spGH.maSP === maSP);
        if ( index !== -1) {
            if (tangGiam === true) {
                gioHangUpdate[index].soLuong += 1;
            } else {
            //    nếu sản phẩm giảm thì xem soLuong > 1 mới cho giảm 
            if (gioHangUpdate[index].soLuong > 1) {
                gioHangUpdate[index].soLuong -= 1;

            } else alert('Số lượng tối thiểu là 1!')
            }
        }
        this.setState({
            gioHang: gioHangUpdate
        })

     }


    render() {
        return (
            <div className = 'container'>
                <h2>BÀI TẬP GIỎ HÀNG</h2>
                <div className = "gioHang">
                    <div className='text-right text-danger'>
                        <span data-toggle = "modal" data-target = "#modelId" style = {{cursor:'pointer'}}>Giỏ hàng ({this.tinhSLGH()})</span>
                    </div>
                   
                    <GioHang gioHang = {this.props.gioHang} xoaGioHang = {this.xoaGioHang} tangGiamSL = {this.tangGiamSL}/> 
                </div>
               
                <DanhSachSanPham mangSanPham = {this.mangSanPham}  themGioHang = {this.themGioHang}/>


            </div>
        )
    }
}
