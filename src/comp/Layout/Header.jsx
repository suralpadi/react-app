import React from 'react';
import NavBar from '../Layout/NavBar';
import { NavLink } from 'react-router-dom';

var bnr = require('./../../assets/images/background/bg11.jpg');

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {logo: ""};
    }

    state = { isSearchActive: false, isQuoteActive: false, isMobileMenuActive: false };

    handleSearchToggle = () => {
        this.setState({ isSearchActive: !this.state.isSearchActive });
    };

    handleQuoteToggle = () => {
        this.setState({ isQuoteActive: !this.state.isQuoteActive });
    };

    handleMobileMenuToggle = () => {
        this.setState({ isMobileMenuActive: !this.state.isMobileMenuActive });
    };

    componentDidMount() {

        const handleScroll = () => {
            const offset = window.scrollY;

            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');

            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);

        window.updateTopMostParent = (logopath) => {
           this.setState({ logo: logopath }); 
        };
    }

    render() {
        const isSearchActive = this.state.isSearchActive;
        const isQuoteActive = this.state.isQuoteActive;
        const isMobileMenuActive = this.state.isMobileMenuActive;

        return (
            <>

                <header className={isMobileMenuActive ? "site-header header-style-1 mobile-sider-drawer-menu active" : "site-header header-style-1 mobile-sider-drawer-menu"} >
                    <div className="top-bar site-bg-white">
                        <div className="container">
                            <div className="d-flex justify-content-between">
                                <div className="wt-topbar-left d-flex flex-wrap align-content-start">
                                    <ul className="wt-topbar-left-info">
                                        <li><i className="flaticon-call" /><span>Call :</span> + (291) 1800-567-9090</li>
                                        <li><i className="flaticon-mail" /><span>Email :</span> office@example.com</li>
                                    </ul>
                                </div>
                                <div className="wt-topbar-right d-flex flex-wrap align-content-center">
                                    <div className="wt-topbar-right-info">
                                        <ul className="social-icons">
                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                            <li><NavLink to={"#"} className="fa fa-twitter" /></li>
                                            <li><NavLink to={"#"} className="fa fa-linkedin" /></li>
                                            <li><NavLink to={"#"} className="fa fa-pinterest" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sticky-header main-bar-wraper  navbar-expand-lg">
                        <div className="main-bar">
                            <div className="container clearfix">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <NavLink to={"./"}>
                                            <img src={this.state.logo.default} alt="Indusza" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button id="mobile-side-drawer" data-target=".header-nav" onClick={this.handleMobileMenuToggle} data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar icon-bar-first" />
                                    <span className="icon-bar icon-bar-two" />
                                    <span className="icon-bar icon-bar-three" />                          </button>
                                {/* MAIN Vav */}
                                <NavBar />
                                {/* Header Right Section*/}
                                <div className="extra-nav header-1-nav">
                                    <div className="extra-cell one">
                                        <div className="header-search">
                                            <NavLink to={"#"} className="header-search-icon" onClick={this.handleSearchToggle}><i className="fa fa-search" /></NavLink>                                  </div>
                                    </div>
                                    <div className="extra-cell two">
                                        <div className="ap-btn-outer">
                                            <NavLink to={"#"} className="ap-btn contact-slide-show" onClick={this.handleQuoteToggle}>Request A Quote <i className="fa fa-angle-double-right slide-right" /></NavLink>                                  </div>
                                    </div>
                                </div>
                                {/* Contact Nav */}
                                <div className="contact-slide-hide bg-cover" style={{ backgroundImage: 'url(' + bnr.default + ')', right: isQuoteActive ? '0px' : '-500px' }}>
                                    <div className="contact-nav">
                                        <NavLink to={"#"} className="contact_close" onClick={this.handleQuoteToggle}>×</NavLink>
                                        <div className="contact-nav-form p-a30">
                                            <div className="contact-info   m-b30">
                                                <div className="wt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h4 className="m-t0  wt-title">Phone number</h4>
                                                        <p>+(02) 0111-7457-354</p>
                                                    </div>
                                                </div>
                                                <div className="wt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h4 className="m-t0 wt-title">Email address</h4>
                                                        <p>demomax@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="wt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h4 className="m-t0  wt-title">Address info</h4>
                                                        <p>280, Taweelah, Abu Dhabi, United Arab Emirates, P.O.Box - 137863</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <span>©  2021 Thewebmax</span>                                      </div>
                                        </div>
                                    </div>
                                </div>
                                {/* SITE Search */}
                                <div id="search" className={isSearchActive ? "open" : null}>
                                    <span className="close" onClick={this.handleSearchToggle} />
                                    <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                        <div className="input-group">
                                            <input className="form-control" defaultValue="" name="q" type="search" placeholder="Type to search" />
                                            <span className="input-group-append"><button type="button" className="search-btn"><i className="fa fa-paper-plane" /></button></span>                                  </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

            </>
        );
    };
};

export default Header;

//Store reference of topmost parent component
//const TopMostParent = ReactDOM.render(<Header />, document.getElementById('root'));

