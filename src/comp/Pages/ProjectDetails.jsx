import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from '../Layout/Main/MainFooter';
import Banner from '../Sections/Banner';
import Projects from '../Sections/Projects';

class ProjectDetails extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Banner title="product Details"/>
                    <div className="section-full p-t120 p-b120 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="project-single">
                                            <div className="project-single-media m-b30">
                                                <img src={require('./../../assets/images/project-4/m3.jpg').default} alt="" />
                                            </div>
                                            <div className="wt-info  bg-white">
                                                <h4 className="wt-tilte">How Mechanical Engineering Works?</h4>
                                                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui
                                                dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took
                                                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                                                Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum Take a look at our
                                                round up of the best shows coming soon to your telly box has been the is industrys. When an unknown
                                                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                It was popularised in the 1960s with the release of Letraset sheets containing.
              </p>
                                                <h4 className="wt-tilte">Challenge &amp; Solutions</h4>
                                                <ul className="arrow-list-1">
                                                    <li><strong>ipsum dolor sit amet, consectetur adipiscing elit.</strong> </li>
                                                    <li><strong>Proin sit amet diam et elit dictum sodales.</strong> </li>
                                                    <li><strong>Suspendisse tempus felis a libero mollis ultrices.</strong> </li>
                                                    <li><strong>Nullam accumsan ipsum a diam cursus mattis</strong> </li>
                                                    <li><strong>Duis quis odio quis dui sagittis laoreet.</strong> </li>
                                                    <li><strong>Suspendisse tempus felis a libero mollis ultrices.</strong> </li>
                                                </ul>
                                                <div className="row project-single-img-column m-b30">
                                                    <div className="col-md-6 col-lg-6"><img src={require('./../../assets/images/project-4/m1.jpg').default} alt="" /></div>
                                                    <div className="col-md-6 col-lg-6"><img src={require('./../../assets/images/project-4/m2.jpg').default} alt="" /></div>
                                                </div>
                                                <p>when our power of choice is untrammelled and when nothing prevents our being able to do what we
                                                like best, every pleasure is to be welcomed and every pain avoided.
                                                But in certain circumstances and owing to the claims of duty or the obligations of business
                it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 rightSidebar" style={{display:"none"}}>
                                        <div className="project-single-sibar-info m-b30">
                                            <h4 className="wt-tilte">Project Information</h4>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                            <ul className="info-list-1">
                                                <li><h5 className="title">Date :</h5><span>02 November 2021</span></li>
                                                <li><h5 className="title">Category :</h5><span> GYM, Fitness</span></li>
                                                <li><h5 className="title">Clients :</h5><span>William Dixon</span></li>
                                                <li><h5 className="title">Location :</h5><span>London, NW18JR, UK</span></li>
                                            </ul>
                                        </div>
                                        <div className="project-single-side-btn m-b30">
                                            <h4 className="wt-title m-b20">Brochures</h4>
                                            <p>View our 2021 financial prospectus brochure for an easy to read guide on all of the services offer.</p>
                                            <div className="wt-icon-box-wraper left ">
                                                <NavLink to={"#"} className="btn-block  m-tb5">
                                                    <span className="text-black m-r10"><i className="fa fa-file-pdf-o" /></span>
                                                    <strong className="text-black">Download .PDF</strong>
                                                </NavLink>
                                            </div>
                                            <div className="wt-icon-box-wraper left">
                                                <NavLink to={"#"} className="btn-block  m-tb5">
                                                    <span className="text-black m-r10"><i className="fa fa-file-word-o" /></span>
                                                    <strong className="text-black"> Download .DOC</strong>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Projects /> */}
                </div>
                <Footer />
            </>
        );
    };
};

export default ProjectDetails;