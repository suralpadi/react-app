import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Banner from '../../Sections/Banner';
import { PostContent } from './Blog/BlogContents';


const relatedPost = [
    {
        image: require('../../../assets/images/blog/latest-2/b1.jpg'),
        title: 'The future of factories in the coming years.',
        category: 'Factory',
        date: '13'
    },
    {
        image: require('../../../assets/images/blog/latest-2/b2.jpg'),
        title: 'The future of factories in the coming years.',
        category: 'Industry',
        date: '18'
    },
    {
        image: require('../../../assets/images/blog/latest-2/b3.jpg'),
        title: 'The future of factories in the coming years.',
        category: 'Energy',
        date: '19'
    },
    {
        image: require('../../../assets/images/blog/latest-2/b4.jpg'),
        title: 'The future of factories in the coming years.',
        category: 'Factory',
        date: '13'
    }
]

class MainEvents extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: true,
            nav: false,
            dots: true,
            margin: 30,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                800: {
                    items: 2,
                }
            }
        };
        return (
            <>
                <div className="page-content">
                    <Banner title="BLog Details" />
                    <div className="section-full  p-t120 p-b90 bg-white">
                        <div className="container">
                            <div className="section-content">
                                <div className="row d-flex justify-content-center">
                                        <div  className="col-xl-8 col-lg-8 col-md-12 col-sm-12 m-b30">
                                    {PostContent.map((item, index) => (
                                            <div key={index} className="blog-post-single-outer">
                                                <div className="blog-post-style-2 blog-post-single bg-white p-b30">
                                                    <div className="wt-post-media">
                                                        <img src={item.postPrimaryImage.default} alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-meta ">
                                                            <ul>
                                                                <li className="post-date">{item.postDate}</li>
                                                                <li className="post-author"><NavLink to={""}>By <span>{item.postAuthor}</span></NavLink> </li>
                                                                <li className="post-comment"><NavLink to={""}>{" "}{item.postComment}{" "}<span>Comment</span></NavLink> </li>
                                                            </ul>
                                                        </div>
                                                        <div className="wt-post-title ">
                                                            <h3 className="post-title">{item.postMainHeading}</h3>
                                                        </div>
                                                        <div className="wt-post-discription">
                                                            <p>{item.postDesc}</p>
                                                            {item.postBlockquote &&
                                                                <blockquote className="site-bg-gray-light">
                                                                    <i className="fa fa-quote-left" />
                                                                    A bene fraticinida. Est barbatus parma, cesaris. Regius era virtualiter imperiums palus est. Domesticus, dexter parmas sed mire magicae.
                                                                </blockquote>
                                                            }
                                                        </div>
                                                        {item.postContents.length !== 0 && <>
                                                            {item.postContents.map((item, index) => (
                                                                <div className='pt-3 pb-1' key={index}>
                                                                    <div className="wt-post-title ">
                                                                        <h4 className="post-title">{item.postHeading}</h4>
                                                                    </div>
                                                                    <div className="wt-post-discription">
                                                                        <p>{item.postDesc}</p>
                                                                        {item.postDesc2 &&
                                                                            <p>{item.postDesc2}</p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </>
                                                        }
                                                    </div>
                                                </div>
                                                {/* <div className="clear" id="comment-list">
                                                <div className="comments-area" id="comments">
                                                    <h3 className="comments-title m-t0">3 Comments</h3>
                                                    <div>
                                                        <ol className="comment-list">
                                                            <li className="comment">
                                                                <div className="comment-body">
                                                                    <div className="comment-author">
                                                                        <img className="avatar photo" src={require("../../../assets/images/testimonials/pic1.jpg").default} alt="" />
                                                                        <cite className="fn">Janice Brown</cite>
                                                                        <div className="reply">
                                                                            <NavLink to={""} className="comment-reply-link">Reply</NavLink>
                                                                        </div>
                                                                    </div>
                                                                    <div className="comment-meta">
                                                                        <NavLink to={""}>16 March, 2021</NavLink>
                                                                    </div>
                                                                    <p>long established fact that a reader will be distracted by the readable content of
                          a page when looking at its layout. The point of using more-or-less letters. </p>
                                                                </div>
                                                                <ol className="children">
                                                                    <li className="comment odd parent">
                                                                        <div className="comment-body">
                                                                            <div className="comment-author">
                                                                                <img className="avatar photo" src={require("../../../assets/images/testimonials/pic2.jpg").default} alt="" />
                                                                                <cite className="fn">Betty Riley</cite>
                                                                                <div className="reply">
                                                                                    <NavLink to={""} className="comment-reply-link">Reply</NavLink>
                                                                                </div>
                                                                            </div>
                                                                            <div className="comment-meta">
                                                                                <NavLink to={""}>18 March, 2021</NavLink>
                                                                            </div>
                                                                            <p>Along with your plans, you should consider developing an action orientation that
                              will keep you motivated to move forward at all times.</p>
                                                                        </div>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                            <li className="comment">
                                                                <div className="comment-body">
                                                                    <div className="comment-author">
                                                                        <img className="avatar photo" src={require("../../../assets/images/testimonials/pic3.jpg").default} alt="" />
                                                                        <cite className="fn">Janice Brown</cite>
                                                                        <div className="reply">
                                                                            <NavLink to={""} className="comment-reply-link">Reply</NavLink>
                                                                        </div>
                                                                    </div>
                                                                    <div className="comment-meta">
                                                                        <NavLink to={""}>24 March, 2021</NavLink>
                                                                    </div>
                                                                    <p>Cras sit amet est eget dui viverra scelerisque. Duis semper
                                                                    pulvinar dui, nec mollis libero tincidunt quis. In hac habitasse
                          platea dictumst.</p>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                        <div className="comment-respond m-t30" id="respond">
                                                            <h2 className="comment-reply-title" id="reply-title">Add a Review
                      <small>
                                                                    <NavLink style={{ display: 'none' }} to={""} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</NavLink>
                                                                </small>
                                                            </h2>
                                                            <form className="comment-form" id="commentform" method="post">
                                                                <p className="comment-form-author">
                                                                    <label>Name <span className="required">*</span></label>
                                                                    <input className="form-control" type="text" defaultValue name="user-comment" placeholder="Author" id="author" />
                                                                </p>
                                                                <p className="comment-form-email">
                                                                    <label>Email <span className="required">*</span></label>
                                                                    <input className="form-control" type="text" defaultValue name="email" placeholder="Email" />
                                                                </p>
                                                                <p className="comment-form-url">
                                                                    <label>Website</label>
                                                                    <input className="form-control" type="text" defaultValue name="url" placeholder="Website" id="url" />
                                                                </p>
                                                                <p className="comment-form-comment">
                                                                    <label>Comment</label>
                                                                    <textarea className="form-control" rows={8} name="comment" placeholder="Comment" id="comment" defaultValue={""} />
                                                                </p>
                                                                <p className="form-submit">
                                                                    <button className="site-button site-btn-effect" type="button">Submit</button>
                                                                </p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            </div>
                                    ))}
                                    {/* <div className="one-column m-b30">
                                                    <div className="wt-media">
                                                        <img src={require("../../../assets/images/blog/blog-single/2.jpg").default} alt="" className="img-responsive" />
                                                    </div>
                                                </div>
                                                <div className="related_posts m-b30">
                                                    <h3 className="wt-title">Realated Post</h3>
                                                    <div className="site-bg-gray-light p-a30">
                                                        <OwlCarousel className="owl-carousel related-posts-carousel owl-btn-bottom-center owl-loaded owl-drag" {...options}>
                                                            {relatedPost.map((item, index) => (
                                                                <div className="item" key={index}>
                                                                    <div className="blog-post blog-post-4-outer">
                                                                        <div className="wt-post-media wt-img-effect zoom-slow">
                                                                            <NavLink to={""}><img src={item.image.default} alt="" /></NavLink>
                                                                        </div>
                                                                        <div className="wt-post-info">
                                                                            <div className="wt-post-meta ">
                                                                                <ul>
                                                                                    <li className="post-date"><span>{item.date} </span>July</li>
                                                                                    <li className="post-category">{item.category}</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="wt-post-title ">
                                                                                <h4 className="post-title"><NavLink to={""}>{item.title}</NavLink></h4>
                                                                            </div>
                                                                            <div className="wt-post-readmore ">
                                                                                <NavLink to={""} className="site-button-link black">Read More</NavLink>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </OwlCarousel>
                                                    </div>
                                                </div> */}
                                    </div>
                                    
                                    {/* <BlogSidebar /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default MainEvents;