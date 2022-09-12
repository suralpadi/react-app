import React from 'react';
import { NavLink } from 'react-router-dom';

const teamMembers = [
    {
        image: require('./../../assets/images/team3/pic1.jpg'),
        membername: 'Ronan',
        position: 'Industry Expert'
    },
    {
        image: require('./../../assets/images/team3/pic2.jpg'),
        membername: 'Brayden',
        position: 'Director'
    },
    {
        image: require('./../../assets/images/team3/pic3.jpg'),
        membername: 'Marco',
        position: 'Contractor'
    },
    {
        image: require('./../../assets/images/team3/pic4.jpg'),
        membername: 'Devin',
        position: 'Industry Expert'
    },
    {
        image: require('./../../assets/images/team3/pic5.jpg'),
        membername: 'Ronan',
        position: 'Mechanical Engineer'
    },
    {
        image: require('./../../assets/images/team3/pic6.jpg'),
        membername: 'Brayden',
        position: 'Electrician'
    }
]

class AllTeam extends React.Component {
    render() {
        return (
            <>
                <div className={`section-full p-t120 p-b90 ${this.props.bgclass}`}>
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Our Team</div>
                            </div>
                            <h2 className="wt-title">Our Experts</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content">
                            <div className="team3-outer">
                                <div className="row justify-content-center">
                                    {teamMembers.map((item, index) => (
                                        <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                            <div className="wt-team-3">
                                                <div className="wt-media">
                                                    <img src={item.image.default} alt="" />
                                                </div>
                                                <div className="wt-info">
                                                    <div className="team-detail">
                                                        <h4 className="m-t0 team-name"><NavLink to="/team-details">{item.membername}</NavLink></h4>
                                                        <span className="team-position">{item.position}</span>
                                                    </div>
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
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
};

export default AllTeam;