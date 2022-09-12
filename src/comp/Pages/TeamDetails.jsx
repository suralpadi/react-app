import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Banner from '../Sections/Banner';
import AllTeam from '../Sections/AllTeam';

class TeamDetails extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content">
          <Banner title="Team Details"/>
          <div className="section-full p-t120 p-b90  site-bg-white">
            <div className="container">
              <div className="section-content team_details_area">
                <div className="row justify-content-center">
                  <div className="col-lg-5 col-md-12 m-b30">
                    <div className="wt-team-1">
                      <div className="wt-media">
                        <img src={require("./../../assets/images/team/pic1.jpg").default} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 m-b30 team-box-single site-bg-gray-light">
                    <div className="team-detail">
                      <span className="team-position">Industry Expert</span>
                      <h4 className="m-t0 team-name"><NavLink to={"#"}>Gabriela Flores</NavLink></h4>
                      <ul className="team-detail-list">
                        <li><span className="team-list-title">Contact Number:</span><span>(009) 53661246741</span></li>
                        <li><span className="team-list-title">Email:</span><span>hello@induza.com</span></li>
                        <li><span className="team-list-title">Joing Date:</span><span>March 25, 2021</span></li>
                        <li><span className="team-list-title">Services &amp; Support:</span><span>autocad, sketchUp, visual basic, 3d premier</span></li>
                        <li><span className="team-list-title">Address:</span><span>32, Wales Street, New York, USA</span></li>
                        <li><span className="team-list-title">Experience:</span><span>6+ Years</span></li>
                      </ul>
                      <div className="team-detail-social">
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
            </div>
          </div>
          <div className="section-full site-bg-gray-light p-t120 p-b90 ">
            <div className="container">
              <div className="team-deatail-featured">
                <h3 className="wt-title m-b30">Featured skills</h3>
                <div className="row">
                  <div className="col-lg-6 col-md-6 m-b30">
                    <div className="our-future">
                      <span className="progressText "><b>Industry</b></span>
                      <div className="progress">
                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '92%' }} aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} /><span> 80%</span>
                      </div>
                      <span className="progressText "><b>Construction</b></span>
                      <div className="progress">
                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '84%' }} aria-valuenow={84} aria-valuemin={0} aria-valuemax={100} /><span> 90%</span>
                      </div>
                      <span className="progressText "><b>Factory</b></span>
                      <div className="progress">
                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} /><span>95%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 m-b30">
                    <div className="our-future">
                      <span className="progressText "><b>Mastery of construction machinery</b></span>
                      <div className="progress">
                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '92%' }} aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} /><span> 80%</span>
                      </div>
                      <span className="progressText "><b>Builders planning</b></span>
                      <div className="progress">
                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '84%' }} aria-valuenow={84} aria-valuemin={0} aria-valuemax={100} /><span> 90%</span>
                      </div>
                      <span className="progressText "><b>Construction and design</b></span>
                      <div className="progress">
                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} /><span>95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AllTeam bgclass="site-bg-white" />
        </div>
        <Footer />
      </>
    );
  };
};

export default TeamDetails;