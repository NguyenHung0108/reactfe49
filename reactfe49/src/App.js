import React from 'react';
import logo from './logo.svg';
import './App.css';

import BaiTapTaiXuu from './BaiTapRedux/BaiTapTaiSuu/BaiTapTaiXuu';
import BaiTapGameOanTuTi from './BaiTapRedux/OanTuTi/BaiTapGameOanTuTi';
import FormSinhVien from './ReactForm/FormSinhVien';

function App() {
  return (
    <div className="App">
     
      {/* <BaiTapTaiXuu/> */}
      <BaiTapGameOanTuTi />
      {/* <FormSinhVien/> */}
    </div>
  );
}

export default App;
