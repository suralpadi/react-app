import React from 'react';
import { NavLink } from 'react-router-dom';
import Particles from "react-tsparticles";
var img1 = require('./../../assets/images/suralpadi/banner-1.jpg');


const Banner = (props = {}) => {
    const {BannerBg = "",title} = props;
    return (
        <>
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url(${BannerBg !=="" ? BannerBg : img1.default})`}}>

                <div className="overlay-main site-bg-black opacity-06" />
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="wt-title">{title}</h2>
                            </div>
                        </div>
                        <div>
                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><NavLink to={"./"}>Home</NavLink></li>
                                <li>&nbsp;{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 100
                            },
                            "size": {
                                "value": 2
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} />
            </div>
        </>
    );
};

export default Banner;