import React from 'react';
import { NavLink } from 'react-router-dom';

const teamMembers = [
    {
        image: require('./../../assets/images/agriculture/team/pic1.jpg'),
        membername: 'William Dixon',
        position: 'Mechanical Engineer'
    },
    {
        image: require('./../../assets/images/agriculture/team/pic2.jpg'),
        membername: 'Gabriela Flores',
        position: 'Industry Expert'
    },
    {
        image: require('./../../assets/images/agriculture/team/pic3.jpg'),
        membername: 'Juliana Bryant',
        position: 'Mechanical Engineer'
    }
]

var img1 = require('./../../assets/images/agriculture/background/bg2.jpg');

class Team3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t120 p-b90 bg-cover bg-bottom-right" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="wt-separator-two-part">
                            <div className="row wt-separator-two-part-row">
                                <div className="col-lg-8 col-md-12 wt-separator-two-part-left">
                                    {/* TITLE START*/}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div className="sep-leaf-left" />
                                            <div>Team of Professionals</div>
                                        </div>
                                        <h2>Expert Contractors</h2>
                                    </div>
                                    {/* TITLE END*/}
                                </div>
                                <div className="col-lg-4 col-md-12 wt-separator-two-part-right text-right">
                                <NavLink to="/teams" className="site-button sb-bdr-dark">Learn More</NavLink>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content">
                            <div className="row justify-content-center">
                                {teamMembers.map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                        <div className="wt-team-2">
                                            <div className="wt-media">
                                                <img src={item.image.default} alt="" />
                                            </div>
                                            <div className="wt-info">
                                                <div className="team-detail">
                                                    <span className="team-position">{item.position}</span>
                                                    <h4 className="m-t0 team-name"><NavLink to="/team-details">{item.membername}</NavLink></h4>
                                                    <div className="team-social-center">
                                                        <ul className="team-social-bar">
                                                            <li><NavLink to={"#"}><i className="fa fa-facebook" /></NavLink></li>
                                                            <li><NavLink to={"#"}><i className="fa fa-twitter" /></NavLink></li>
                                                            <li><NavLink to={"#"}><i className="fa fa-linkedin" /></NavLink></li>
                                                            <li><NavLink to={"#"}><i className="fa fa-pinterest" /></NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Team3;