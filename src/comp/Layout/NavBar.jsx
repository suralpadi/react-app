import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    
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
                        <li className="active has-child"><NavLink to={""}>Home</NavLink><div className="fa fa-angle-right submenu-toogle" />
                            <ul className="sub-menu">
                                <li><NavLink to={"./"}>Industry 1</NavLink></li>
                                <li><NavLink to={"/homepage2"}>Industry 2</NavLink></li>
                                <li><NavLink to={"/homepage3"}>Garden</NavLink></li>
                                <li><NavLink to={"/homepage4"}>Construction</NavLink></li>
                                <li><NavLink to={"/homepage5"}>Transport</NavLink></li>
                            </ul>
                        </li>
                        <li className="has-child">
                            <NavLink to={""}>Company</NavLink><div className="fa fa-angle-right submenu-toogle" />
                            <ul className="sub-menu">
                                <li><NavLink to={""}>About</NavLink><div className="fa fa-angle-right submenu-toogle" />
                                    <ul className="sub-menu">
                                        <li><NavLink to={"/about"}>About us 1</NavLink></li>
                                        <li><NavLink to={"/about2"}>About us 2</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to={""}>Services</NavLink><div className="fa fa-angle-right submenu-toogle" />
                                    <ul className="sub-menu">
                                        <li><NavLink to={"/services"}>Services</NavLink></li>
                                        <li><NavLink to={"/service-details"}>Services Detail</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to={""}>Team</NavLink><div className="fa fa-angle-right submenu-toogle" />
                                    <ul className="sub-menu">
                                        <li><NavLink to={"/teams"}>Team</NavLink></li>
                                        <li><NavLink to={"/team-details"}>Team Detail</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to={"/faq"}>Faq</NavLink></li>
                                <li><NavLink to={"/pricing-plans"}>Pricing</NavLink></li>
                                <li><NavLink to={"/error-404"}>Error-404</NavLink></li>
                                <li><NavLink to={"/icons"}>Icon Font</NavLink></li>
                            </ul>
                        </li>
                        <li className="has-child"><NavLink to={""}>Recent Projects</NavLink><div className="fa fa-angle-right submenu-toogle" />
                            <ul className="sub-menu">
                                <li><NavLink to={"/projects"}>Projects 1</NavLink></li>
                                <li><NavLink to={"/projects2"}>Projects 2</NavLink></li>
                                <li><NavLink to={"/projects-carousel"}>Projects Carousel</NavLink></li>
                                <li><NavLink to={"/projects-details"}>Projects Single</NavLink></li>
                            </ul>
                        </li>
                        <li className="has-child"><NavLink to={""}>Blog</NavLink><div className="fa fa-angle-right submenu-toogle" />
                            <ul className="sub-menu">
                                <li><NavLink to={"/blog-grid"}>Blog Grid</NavLink></li>
                                <li><NavLink to={"/blog-list"}>Blog List</NavLink></li>
                                <li><NavLink to={"/blog-details"}>Blog Single</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    </ul>
                </div>

            </>
        );
    };
};

export default NavBar;