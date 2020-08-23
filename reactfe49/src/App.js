import React from 'react';
import logo from './logo.svg';
import './App.css';
import Styling from './StylingComponent/Styling';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">
      {/* <Styling></Styling> */}
      {/* <RenderWithState></RenderWithState> */}
      <BaiTapChonXe/>
      <RenderWithMap/>
      
    </div>
  );
}

export default App;
