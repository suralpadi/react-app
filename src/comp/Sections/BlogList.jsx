import React from 'react';
import { NavLink } from 'react-router-dom';

const blogList = [
    {
        image: require('./../../assets/images/blog/list/bg1.jpg'),
        title: 'Let us help you invest in sustainable infrastructure.'
    },
    {
        image: require('./../../assets/images/blog/list/bg2.jpg'),
        title: 'Manufacturing Relationships. Distributing Quality.'
    },
    {
        image: require('./../../assets/images/blog/list/bg3.jpg'),
        title: 'Remember – The Next Inspector Is The Customer.'
    },
    {
        image: require('./../../assets/images/blog/list/bg4.jpg'),
        title: 'Seeing what doesn’t exist yet. That’s our strength.'
    }
]

class BlogList extends React.Component {
    render() {
        return (
            <>
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 m-b30">
                    <div className="blog-post-2-outer blog-list-style">
                        {blogList.map((item, index) => (
                            <div className="blog-post blog-post-4-outer m-b30" key={index}>
                                <div className="wt-post-media wt-img-effect zoom-slow">
                                    <NavLink to="/blog-details"><img src={item.image.default} alt="" /></NavLink>
                                </div>
                                <div className="wt-post-info">
                                    <div className="wt-post-meta ">
                                        <ul>
                                            <li className="post-date"><span>13 </span>July</li>
                                            <li className="post-category">Factory</li>
                                        </ul>
                                    </div>
                                    <div className="wt-post-title ">
                                        <h4 className="post-title"><NavLink to="/blog-details">{item.title}</NavLink></h4>
                                    </div>
                                    <div className="wt-post-text ">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maece sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                    <div className="wt-post-readmore ">
                                        <NavLink to="/blog-details" className="site-button-link black">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/*Post pagination*/}
                    <div className="pagination-outer text-center">
                        <div className="pagination-style1 text-center">
                            <ul className="clearfix">
                                <li className="prev"><NavLink to={""}><span className="fa fa-angle-double-left" /></NavLink></li>
                                <li><NavLink to={""}>1</NavLink></li>
                                <li className="active"><NavLink to={""}>2</NavLink></li>
                                <li><NavLink to={""}>3</NavLink></li>
                                <li className="next"><NavLink to={""}><span className="fa fa-angle-double-right" /></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default BlogList;