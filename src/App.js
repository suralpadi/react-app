import React from 'react';
import Comp from './comp/Comp';
import ScrolToTop from "./comp/Sections/ScrolToTop";
import Loader from "./comp/Sections/Loader";
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/flaticon.min.css';
import './assets/css/switcher.css';
import './assets/css/style.css';
import './assets/css/custom.css';
import Main from './comp/Main';

const App = () => {
  
  return (
    <div className="App">
      {/* <Comp/> */}
      <Main />
      <ScrolToTop/>
      <Loader/>
    </div>
  );
}

export default App;