import React from 'react';
import logo from './logo.svg';
import './App.css';
import Styling from './StylingComponent/Styling';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapRenderPhim from './RenderWithMap/BaiTapRenderPhim';
import DemoProps from './Props/DemoProps';
import BaiTapQLSP from './Props/BaiTapQLSP';
import MyPactice from './BindingRCC/MyPactice';
// import BaiTapGioHang from './Props/BaiTapGioHang/BaiTapGioHang';


function App() {
  let mangSP = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/dt1.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/dt2.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/dt3.jpg" }

  ]


  return (
    <div className="App">
      {/* <Styling></Styling> */}
      {/* <RenderWithState></RenderWithState> */}
      {/* <BaiTapChonXe/>
      <RenderWithMap/> */}
      {/* <BaiTapRenderPhim></BaiTapRenderPhim> */}
      {/* <DemoProps></DemoProps> */}
      {/* <BaiTapQuanLySanPham mangSP={mangSP} ></BaiTapQuanLySanPham> */}
      {/* <BaiTapQLSP mangSP = {mangSP} /> */}
      {/* <BaiTapGioHang /> */}
      <MyPactice />
   
      {/* <BaiTapChonXe/> */}
    </div>
  );
}

export default App;
