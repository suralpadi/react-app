import React from 'react';
import { NavLink } from 'react-router-dom';
import MainNavBar from './MainNavBar';

var bnr = require('../../../assets/images/background/bg11.jpg');
const d = new Date();
const year = d.getFullYear();
class MainHeader extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {logo: require('../../../assets/images/logo.png')};
    }

    state = { isSearchActive: false, isQuoteActive: false, isMobileMenuActive: false};

    handleSearchToggle = () => {
        this.setState({ isSearchActive: !this.state.isSearchActive });  
    };

    handleQuoteToggle = () => {
        this.setState({ isQuoteActive: !this.state.isQuoteActive });  
    };

    handleContactFormToggle = () => {
        this.setState({ isContactFormActive: !this.state.isContactFormActive });  
    };

    handleMobileMenuToggle = () => {
        this.setState({ isMobileMenuActive: !this.state.isMobileMenuActive });
    };

    componentDidMount() {

        const handleScroll=() => {
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

        window.addEventListener('scroll',handleScroll);

        window.updateTopMostParent = (logopath) => {
            this.setState({ logo: logopath }); 
        };
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ resmessage: "Message Sent Successfully!",resclass: "alert alert-success" });
        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({phone: ''});
        this.setState({subject: ''});
        this.setState({message: ''});
        fetch('./Mail.php', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            }).then(
            (response) => (response.json())
            ).then((response)=> {
            if (response.status === 'success') {
            alert("Message Sent."); 
            this.resetForm()
            } else if(response.status === 'fail') {
            alert("Message failed to send.")
            }
        });
        
    }
    
    render() {
        
        const isSearchActive = this.state.isSearchActive;
        const isQuoteActive = this.state.isQuoteActive;
        const isContactFormActive = this.state.isContactFormActive;
        const isMobileMenuActive = this.state.isMobileMenuActive;
        
        return (
            <>
                <header className={isMobileMenuActive ? "site-header header-style-2 mobile-sider-drawer-menu active" : "site-header header-style-2 mobile-sider-drawer-menu"} >
                   <div className="top-bar site-bg-black">
                        <div className="container-fluid">
                            <div className="wt-topbar-outer d-flex justify-content-between">
                                <div className="wt-topbar-left d-flex flex-wrap align-content-start">
                                    <ul className="wt-topbar-left-info">
                                        <li><i className="flaticon-call" /><span>Call :</span> +971 588725957</li>
                                        <li><i className="flaticon-mail" /><span>Email :</span>business.global@suralpadi.com</li>
                                    </ul>
                                </div>
                                <div className="wt-topbar-right d-flex flex-wrap align-content-center">
                                    <div className="wt-topbar-right-info">
                                        <ul className="social-icons">
                                        <li><a rel="noreferrer" target="_blank"  href={"https://www.facebook.com/Suralpadi"}><i className="fa fa-facebook"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank"  href={"https://twitter.com/Suralpadi_group"}><i className="fa fa-twitter"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank"  href={"https://www.linkedin.com/in/suralpadi-group-401085226/"}><i className="fa fa-linkedin"></i> </a></li>
                                            <li><a rel="noreferrer" target="_blank"  href={"https://www.pinterest.com/suralpadi/_saved/"}><i className="fa fa-pinterest"></i> </a></li>
                                            <li><a rel="noreferrer" target="_blank"  href={"https://www.instagram.com/suralpadi_group/"}><i className="fa fa-instagram"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href={"https://youtube.com/channel/UC2mZYFUcP0AY_kCjT7j006A"}><i className="fa fa-youtube"></i></a></li>
                                        </ul>
                                        <div className="ap-btn-outer">
                                        <NavLink to={"#"} className="ap-btn2 contact-slide-show" onClick={this.handleQuoteToggle}>Request A Quote <i className="fa fa-angle-double-right slide-right" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-header main-bar-wraper  navbar-expand-lg">
                        <div className="main-bar">
                            <div className="container-fluid clearfix">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one ">
                                        <NavLink className="d-flex align-items-end" to={"./"}>
                                            <img className="logo-sm" src={this.state.logo.default} alt="Sural padi" />
                                            <strong className="logo-text">SURALPADI</strong>                                 
                                        </NavLink>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button id="mobile-side-drawer" data-target=".header-nav" onClick={this.handleMobileMenuToggle} data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar icon-bar-first" />
                                    <span className="icon-bar icon-bar-two" />
                                    <span className="icon-bar icon-bar-three" />
                                </button>
                                <MainNavBar/>
                                {/* Header Right Section*/}
                                <div className="extra-nav header-1-nav">
                                    <div className="extra-cell one">
                                        <div className="header-line-btn menu-btn">
                                        <NavLink to={"#"} className="header-line-icon" onClick={this.handleContactFormToggle}>
                                                <span className="icon-line icon-bar-first" />
                                                <span className="icon-line icon-bar-two" />
                                                <span className="icon-line icon-bar-three" />
                                            </NavLink>
                                        </div>
                                    </div>
                                    {/* <div className="extra-cell two">
                                        <div className="header-search">
                                        <NavLink to={"#"} className="header-search-icon" onClick={this.handleSearchToggle}><i className="fa fa-search" /></NavLink>
                                        </div>
                                    </div> */}
                                </div>
                                {/* Contact Nav */}
                                <div className="contact-slide-hide bg-cover" style={{ backgroundImage: 'url('+bnr.default+')', right:isQuoteActive ? '0px' : '-560px' }}>
                                    <div className="contact-nav">
                                        <NavLink to={"#"} className="contact_close" onClick={this.handleQuoteToggle}>×</NavLink>
                                        <div className="contact-nav-form p-a30">
                                            <div className="contact-info   m-b30">
                                                <div className="wt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h4 className="m-t0  wt-title">Phone number</h4>
                                                        <p>+971 588725957</p>
                                                    </div>
                                                </div>
                                                <div className="wt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h4 className="m-t0 wt-title">Email address</h4>
                                                        <p>business.global@suralpadi.com</p>
                                                    </div>
                                                </div>
                                                <div className="wt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h4 className="m-t0  wt-title">Address info</h4>
                                                        <p>280, Taweelah, Abu Dhabi, United Arab Emirates, P.O.Box - 137863.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <span>©  {year} Digital Decode</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* SITE Search */}
                                <div id="search" className={isSearchActive ? "open" : null}>
                                    <span className="close" onClick={this.handleSearchToggle} />
                                    <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                        <div className="input-group">
                                            <input className="form-control" defaultValue="" name="q" type="search" placeholder="Type to search" />
                                            <span className="input-group-append"><button type="button" className="search-btn"><i className="fa fa-paper-plane" /></button></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="full-menu bg-cover bg-no-repeat" style={{ backgroundImage: 'url('+bnr.default+')', display:isContactFormActive ? 'block' : 'none' }}>
                        <button type="button" className="full-menu-close" onClick={this.handleContactFormToggle} />
                        <div className="vertical-content-wrap">
                            <div className="vertical-centered">
                                {/* MAIN Vav */}
                                <div className="contact-form-outer">
                                    <form className="cons-contact-form" method="post"  onSubmit={this.handleSubmit.bind(this)}>
                                        {/* TITLE START*/}
                                        <div className="section-head left wt-small-separator-outer">
                                            <h3 className="wt-title m-b30">Contact Form</h3>
                                            <p>Feel Free to Contact us any time. we will get back to you as soon as we can't</p>
                                        </div>
                                        {/* TITLE END*/}
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input name="phone" type="text" className="form-control" required placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input name="subject" type="text" className="form-control" required placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" rows={4} placeholder="Message" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="site-button sb-bdr-dark">Submit Now</button>
                                            </div>
                                        </div>
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

export default MainHeader;