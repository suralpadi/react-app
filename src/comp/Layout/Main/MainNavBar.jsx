import React from 'react';
import { NavLink } from 'react-router-dom';

class MainNavBar extends React.Component {
    
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/mobile-menu.js');
      
    };

    render() {
        return (
            <>
                <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
                    <ul className=" nav navbar-nav">
                        <li className="active has-child"><NavLink to={"./"}>Home</NavLink></li>
                        <li className="has-child">
                            <NavLink to={""}>Our Company</NavLink><div className="fa fa-angle-right submenu-toogle" />
                            <ul className="sub-menu">
                                <li><NavLink to={"/about"}>About</NavLink></li>
                                {/* <li><NavLink to={"/news"}>News</NavLink></li> */}
                                <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
                            </ul>
                        </li>
                        <li className="has-child"><NavLink to={"#0"}>Products</NavLink><div className="fa fa-angle-right submenu-toogle" />
                            <ul className="sub-menu">
                                <li><NavLink to={"/fero-3d-measurement-technology"}>FARO 3D Measurement Technology</NavLink></li>
                                <li><NavLink to={"/cmm-bridge"}>CMM (Bridge type)</NavLink></li>
                                {/* <li><NavLink to={"/portable-cmm-accessories"}>Portable CMM Accessories</NavLink></li> */}
                                {/* <li><NavLink to={"/station-bed-cmm "}>Station bed CMM - Probes and Accessories</NavLink></li> */}
                                {/* <li><NavLink to={"/cnc-machines-hurco"}>CNC Machines - HURCO</NavLink></li> */}
                                <li><NavLink to={"/rapid-prototyping-3d-printing"}>Rapid Prototyping / 3D Printing</NavLink></li>
                                <li><NavLink to={"/lab-equipments-sinowon"}>Lab Equipments - SINOWON</NavLink></li>
                                <li><NavLink to={"/laser-cutting-machines"}>Laser Cutting Machines</NavLink></li>
                                <li><NavLink to={"/laser-engraving-machines"}>Laser Engraving Machines</NavLink></li>
                                <li><NavLink to={"/laser-cleaning-machines"}>Laser Cleaning Machines</NavLink></li>
                                <li><NavLink to={"/laser-welding-machines"}>Laser Welding Machines</NavLink></li>
                                <li><NavLink to={"/test-measure-equipments"}>Test & Measure Equipments</NavLink></li>
                                <li><NavLink to={"/global-3d-scanner"}>Global 3D Scanner</NavLink></li>
                            </ul>
                        </li>
                        <li className="has-child"><NavLink to={"#0"}>Services</NavLink><div className="fa fa-angle-right submenu-toogle" />
                            <ul className="sub-menu">
                                <li><NavLink to={"/metrology-solutions"}>Metrology Solutions</NavLink></li>
                                <li><NavLink to={"/rapid-prototyping-solutions"}>Rapid Prototyping Solutions</NavLink></li>
                                <li><NavLink to={"/machining-solution"}>Machining Solutions</NavLink></li>
                                <li><NavLink to={"/turnkey-solutions"}>Turnkey Solutions</NavLink></li>
                                <li><NavLink to={"/consultancy-solutions"}>Consultancy Solutions</NavLink></li>
                            </ul>
                        </li>
                        {/* <li><NavLink to={"/contact"}>Clients</NavLink></li> */}
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    </ul>
                </div>

            </>
        );
    };
};

export default MainNavBar;