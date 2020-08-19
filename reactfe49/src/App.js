import React from 'react';
import Demo from './Components/Demo';
import DemoHeader from './Components/DemoHeader';
import BaiTapLayout1 from './Components/BaiTapLayout1/BaiTapLayout1';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent.js';

function App() {
  return (
    <div className="App">
     {/* <Demo/>
     <DemoHeader></DemoHeader> */}
     {/* <BaiTapLayout1></BaiTapLayout1> */}
     <BaiTapLayout2></BaiTapLayout2>
     <DataBinding></DataBinding>
     <HandleEvent></HandleEvent>
    </div>
  );
}

export default App;
